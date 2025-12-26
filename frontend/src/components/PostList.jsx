import { useEffect, useState } from "react";
import { fetchPosts, deletePost } from "../services/api";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    fetchPosts().then((data) => setPosts(data));
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    loadPosts();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <section>
      <CreatePost onPostCreated={loadPosts} />

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-[#f0f4f8]">Blog Posts</h2>
        <div className="h-px flex-1 ml-4 bg-[#00bcd4]/30" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onDelete={handleDelete} onUpdated={loadPosts} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
