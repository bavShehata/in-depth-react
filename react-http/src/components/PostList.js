import React, { Component } from "react";
import axios from "axios";
export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => this.setState({ error: "Couldn't load" }));
  }
  render() {
    const { posts, error } = this.state;
    return (
      <div>
        {posts.length ? (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

export default PostList;
