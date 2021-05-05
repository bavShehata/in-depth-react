import React, { useState, useEffect } from "react";
import axios from "axios";
const UseStateDataFetching = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  let err = "";
  useEffect(async () => {
    try {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/poss`);
      const data = res.data;
      setLoading(false);
      setPosts(data);
      setError("");
      console.log(data);
    } catch (e) {
      setLoading(false);
      setPosts("");
      setError("ERROR");
    }
  }, []);
  return (
    <div>
      {loading && "Loading..."}

      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      {error && error}
    </div>
  );
};
export default UseStateDataFetching;
