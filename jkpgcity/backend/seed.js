import fs from "node:fs"; //fs= file system- Node read/write files
import path from "node:path"; //path- handle file paths across operating systems like Windows and Mac
import pg from "pg"; // PostGresql client for Node; allows node to talk to postgresql; without it Node can't query the database

const { Pool } = pg; // the pg library provides multiple connection types, most common is Pool
//a connection pool means multiple reusable database connections

//create database connection, matching the docker config
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "jkpgcity",
});

//this creates an absolute path to the file
const filePath = path.resolve("data/venues.json"); //why resolve? Node runs from different directories sometimes, but resolve ensures correct file path
//Read the JSON file
const venues = JSON.parse(fs.readFileSync(filePath, "utf8")); //fs.readFileSync.... reads the JSON file as a text; while JSON.parse() turns that text into ex arrays (usable JS)

//Create seed function
async function seed() { //this function performs db operations, uses async because database equires it: query -> wait -> result
    //AWAIT TELLS JAVASCRIPT TO PAUSE IN SPECIFIC POINTS UNTIL THE ASYNC OPERATION FINISHES TO NOT BREAK THE LOGIC
    await pool.query(`DROP TABLE IF EXISTS venues;`); //drop existing tables to prevent duplicates, when seeding you want a fresh database

    //creates the table, this defines the database structure
    await pool.query(`
        CREATE TABLE IF NOT EXISTS venues (
          id SERIAL PRIMARY KEY, -- auto-increment unique ID for each venue
          name TEXT NOT NULL, -- name of the venue (required)
          category TEXT NOT NULL, -- category ex restaurant, bar etc (required)
          address TEXT NOT NULL, -- full address of the venue (required)
          district TEXT, -- optional district/area within the city
          url TEXT, -- website or external link
          image_url TEXT  -- URL for the image used in frontend
        );
    `);

    //inserts query for one row
    for (const v of venues) {
        await pool.query(
            `INSERT INTO venues (name, category, address, district, url, image_url)
            VALUES ($1, $2, $3, $4, $5, $6)`, //these represent the name, category, address etc not the venues themselves
            [v.name, v.category, v.address, v.district, v.url, v.image]
        );
    }

    console.log(`Seeded ${venues.length} venues`); //shows how many venues were inserted in terminal
    await pool.end(); //closes the database connections because otherwise Node may not exit
}

//run the function, executes the script and if an error occurs:
seed().catch((err) => {
    console.error(err); //prints error
    process.exit(1); //exits program
});


//How to run this file:
// npm run seed

//then do npm init -y
// npm i express pg