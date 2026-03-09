import fs from "node:fs";
import path from "node:path";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "jkpgcity",
});

const filePath = path.resolve("data/venues.json");
const venues = JSON.parse(fs.readFileSync(filePath, "utf8"));

async function seed() {
  await pool.query(`DROP TABLE IF EXISTS venues;`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS venues (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      address TEXT NOT NULL,
      district TEXT,
      url TEXT,
      image_url TEXT
    );
  `);

  for (const v of venues) {
    await pool.query(
      `INSERT INTO venues (name, category, address, district, url, image_url)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [v.name, v.category, v.address, v.district, v.url, v.image]
    );
  }

  console.log(`Seeded ${venues.length} venues`);
  await pool.end();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});