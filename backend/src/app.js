const express = require("express");
const cors = require("cors");

const app = express();

const postsRoutes = require("./routes/posts.routes");

app.use(cors());
app.use(express.json());

app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

module.exports = app;
