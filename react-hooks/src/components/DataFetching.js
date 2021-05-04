import React, { useState, useEffect } from "react";
import axios from "axios";
const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  useEffect(async () => {
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = res.data;
    setPost(data);
    console.log(post);
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
      <button onClick={handleClick}>Get Post</button>
      <ul>
        <li key={post.id}>{post.title}</li>
      </ul>
    </div>
  );
};
export default DataFetching;
