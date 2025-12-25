const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllPosts,
  getPostById,
} = require("../controllers/posts.controller");

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);

module.exports = router;
