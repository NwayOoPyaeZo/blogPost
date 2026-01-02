import { useState } from "react";
import { updatePost } from "../services/api";
export default function PostItem({ post, onDelete, onUpdated }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [author, setAuthor] = useState(post.author || "");

  const startEdit = () => setIsEditing(true);
  const cancelEdit = () => {
    setIsEditing(false);
    setTitle(post.title);
    setContent(post.content);
    setAuthor(post.author || "");
  };

  const saveEdit = async () => {
    if (!title || !content) return;
    await updatePost(post.id, { title, content, author });
    setIsEditing(false);
    onUpdated && onUpdated();
  };

  return (
    <article className="bg-[#14253d] rounded-xl p-6 shadow-md shadow-[#00bcd4]/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00bcd4]/20 animate-[fadeInUp_0.4s_ease-out]">
      {isEditing ? (
        <div className="space-y-3">
          <input
            className="w-full bg-[#0a1a2f] text-[#f0f4f8] placeholder-[#7f8c8d] border border-[#23344f] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full bg-[#0a1a2f] text-[#f0f4f8] placeholder-[#7f8c8d] border border-[#23344f] rounded-lg p-3 min-h-24 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent"
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
          <div className="flex gap-2 justify-end">
            <button
              onClick={saveEdit}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e90ff] to-[#00bcd4] text-white font-semibold rounded-lg px-4 py-2 shadow-md hover:shadow-lg hover:shadow-[#00bcd4]/30 transition-all"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="inline-flex items-center gap-2 bg-[#23344f] text-white font-semibold rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold text-[#f0f4f8]">{post.title}</h3>
          <p className="mt-2 leading-relaxed">{post.content}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm italic text-[#7f8c8d]">By {post.author || "Anonymous"}</span>
            <div className="flex gap-2">
              <button
                onClick={startEdit}
                className="inline-flex items-center gap-2 bg-[#1e90ff] text-white font-semibold rounded-lg px-3 py-1.5 shadow-md hover:shadow-lg hover:shadow-[#1e90ff]/30 transition-all"
              >
                Edit
              </button>
              {onDelete && (
                <button
                  onClick={() => onDelete(post.id)}
                  className="inline-flex items-center gap-2 bg-[#ff4d4f] text-white font-semibold rounded-lg px-3 py-1.5 shadow-md hover:shadow-lg hover:shadow-[#ff4d4f]/30 transition-all"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </article>
  );
}
