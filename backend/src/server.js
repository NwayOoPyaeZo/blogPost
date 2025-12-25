const app = require("./app");
require("dotenv").config();
const pool = require("./db/db");

const PORT = process.env.PORT || 5000;

pool
  .connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch((err) => console.error("DB connection error", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
