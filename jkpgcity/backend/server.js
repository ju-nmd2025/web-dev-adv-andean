//this imports the tools we need
import express from "express"; //express to build a new server
import pg from "pg"; //pg to connect Node to PostgraSQL
import path from "node:path"; //path to safely work with file paths 

//Get Pool from pg

//a pool manages database connections for us. So instead of opening a new database manually every single time, we let pool handle it
const { Pool } = pg; //this pulls the Pool class out of the pg library 
const app = express(); //this creates the Express application object; without app, there would be no server

app.use(express.json()); //this tells express: if a request contains JSON in the body, parse it into req.body. Standard express setup even though unnecessary in this case

//serve the files inside the frontend folder directly to the browser, so that you can open http://localhost:3000
//path.resolve is used because server.js is in backend so it tells it basically to go up one folder to reach the frontend and serve
app.use(express.static(path.resolve("../frontend")));

//this creates the database connection configuration for postgresql;
//this is in server.js because the server file needs direct access to the database to answer API requests
const pool = new Pool({
    host: "localhost", //database is reachable locally because docker exposes the port
    port: 5432, //postgresql default port
    user: "postgres", //matches docker-compose config
    password: "postgres", //matches docker-compose config
    database: "jkpgcity", //name of the database created on docker
});

//this creates a route that responds to GET requests at /api/venues
//frontend can call this with fetch("/api/venues")
app.get("/api/venues", (req, res) => {
    pool.query( //this sends an sql query to postgresql
        "SELECT id, name, category, address, district, url, image_url FROM venues ORDER BY name",
        (err, result) => { //this line handles the callback function that runs when database query finishes
            //err=> if something goes wrong; result => if query succeeded
            if (err) {
                res.status(500).json({ error: "Database query failed"}); //HTTP 500 means internal server error
                return;
            }
            res.json(result.rows); //sends the database rows to the frontend as JSON
        }
    );
});
// ADD: create a new venue
app.post("/api/venues", (req, res) => {
  const { name, category, address, district, url, image_url } = req.body;

  if (!name || !category || !address) {
    return res.status(400).json({ error: "name, category, address are required" });
  }

  pool.query(
    `INSERT INTO venues (name, category, address, district, url, image_url)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, name, category, address, district, url, image_url`,
    [name, category, address, district ?? null, url ?? null, image_url ?? null],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database insert failed" });
      res.status(201).json(result.rows[0]);
    }
  );
});

// EDIT: update an existing venue by id
app.put("/api/venues/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, category, address, district, url, image_url } = req.body;

  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }
  if (!name || !category || !address) {
    return res.status(400).json({ error: "name, category, address are required" });
  }

  pool.query(
    `UPDATE venues
     SET name = $1, category = $2, address = $3, district = $4, url = $5, image_url = $6
     WHERE id = $7
     RETURNING id, name, category, address, district, url, image_url`,
    [name, category, address, district ?? null, url ?? null, image_url ?? null, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database update failed" });
      if (result.rowCount === 0) return res.status(404).json({ error: "Venue not found" });
      res.json(result.rows[0]);
    }
  );
});

// DELETE: remove a venue by id
app.delete("/api/venues/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  pool.query("DELETE FROM venues WHERE id = $1", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database delete failed" });
    if (result.rowCount === 0) return res.status(404).json({ error: "Venue not found" });
    res.status(204).send();
  });
});
//this starts the express server and tells it to run on port 3000
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})

//to run it
//npm start