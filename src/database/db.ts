import dotenv from "dotenv";
import pg from "pg";
const { Pool } = pg;

dotenv.config()

const db = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT as number | 5432 | undefined,
});

export default db;
