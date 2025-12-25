const express = require("express");

const app = express();

const postsRoutes = require("./routes/posts.routes");

app.use(express.json());

app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

module.exports = app;
