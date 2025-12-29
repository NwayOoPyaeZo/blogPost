const { Pool } = require("pg");

// Render-compatible: always use DATABASE_URL and enable SSL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool
  .connect()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error", err));

module.exports = pool;
