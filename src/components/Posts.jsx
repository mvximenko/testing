import axios from 'axios';
import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      const comments = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      setPosts(comments.data);
    })();
  }, []);

  return (
    <ul>
      {posts?.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
