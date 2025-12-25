const pool = require("../db/db");

const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const result = await pool.query(
      "INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *",
      [title, content, author]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create post",
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM posts ORDER BY created_at DESC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch posts",
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM posts WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch post",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const result = await pool.query(
      "UPDATE posts SET title = $1, content = $2, author = $3 WHERE id = $4 RETURNING *",
      [title, content, author, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to update post",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete post",
    });
  }
};


module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};

