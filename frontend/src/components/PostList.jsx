import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch(() => setError("Could not load posts"));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>By {post.author}</small>
        </div>
      ))}
    </div>
  );
};

export default PostList;
