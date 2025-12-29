const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const postsRoutes = require("./routes/posts.routes");

app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Catch-all route to serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
