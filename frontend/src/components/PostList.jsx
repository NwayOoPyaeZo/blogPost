import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import CreatePost from "./CreatePost";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    fetchPosts().then((data) => setPosts(data));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <CreatePost onPostCreated={loadPosts} />

      <h2>Blog Posts</h2>

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
