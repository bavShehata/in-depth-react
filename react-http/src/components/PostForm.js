import axios from "axios";
import React, { Component } from "react";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = { userID: "", title: "", body: "" };
  }
  handleInput = (event) => {
    var input = event.target;
    input = { [input.name]: [input.value] };
    this.setState(input);
  };
  submitPost = (e) => {
    e.preventDefault();
    const { userID, title, body } = this.state;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(console.log("Post Submitted", title))
      .catch((err) => console.log("COULDN't ADD, ", err));
  };
  render() {
    const { userID, title, body } = this.state;
    return (
      <form onSubmit={this.submitPost}>
        <div>
          <input
            type="text"
            name="userID"
            onChange={this.handleInput}
            value={userID}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            onChange={this.handleInput}
            value={title}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            onChange={this.handleInput}
            value={body}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default PostForm;
