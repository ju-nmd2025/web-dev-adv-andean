import express from "express";
import pg from "pg";
import path from "node:path";

const { Pool } = pg;
const app = express();

app.use(express.json()); // from labs: needed for POST/PUT later; safe to keep now

// serve frontend (so you can open http://localhost:3000)
app.use(express.static(path.resolve("../frontend")));

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "anniewagstrom",
  password: "",
  database: "jkpgcity",
});

app.get("/api/venues", (req, res) => {
 pool.query(
   "SELECT id, name, category, address, district, url, image_url FROM venues ORDER BY name",
   (err, result) => {
     if (err) {
       res.status(500).json({ error: "Database query failed" });
       return;
     }
     res.json(result.rows);
   }
 );
});

app.listen(3000, () => {
 console.log("Server running on http://localhost:3000");
});
