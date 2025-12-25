import { useState } from "react";
import { createPost } from "../services/api";

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) return;

    await createPost({ title, content, author });
    setTitle("");
    setContent("");
    setAuthor("");

    onPostCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePost;
