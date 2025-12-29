const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const postsRoutes = require("./routes/posts.routes");
const pool = require("./db/db");

app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Health check: verify DB connection, SSL, and database availability
app.get("/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      status: "ok",
      dbTime: result.rows[0].now
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

// Catch-all to serve frontend
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
