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
    <div className="bg-[#14253d] rounded-xl p-6 shadow-lg shadow-[#00bcd4]/10 mb-8">
      <h2 className="text-2xl font-semibold text-[#f0f4f8] mb-4">Create Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full bg-[#0a1a2f] text-[#f0f4f8] placeholder-[#7f8c8d] border border-[#23344f] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full bg-[#0a1a2f] text-[#f0f4f8] placeholder-[#7f8c8d] border border-[#23344f] rounded-lg p-3 min-h-28 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          className="w-full bg-[#0a1a2f] text-[#f0f4f8] placeholder-[#7f8c8d] border border-[#23344f] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#1e90ff] to-[#00bcd4] text-white font-semibold rounded-lg px-4 py-2 shadow-md hover:shadow-lg hover:shadow-[#00bcd4]/30 transition-all"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
