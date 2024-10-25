// components/Feed.js
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export default function Feed() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    socketInitializer();
  }, []);
  
  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.on('new-post', (post) => {
      setPosts((prevPosts) => [post, ...prevPosts]);
    });
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
