import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      password: "",
      language: "english",
    };
  }
  handleInputChange = (event) => {
    let value = { [event.target.name]: event.target.value };
    this.setState(value);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    const { username, comments, password, language } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
        />
        <label htmlFor="comments">comments</label>
        <input
          type="text"
          value={this.state.comments}
          name="comments"
          onChange={this.handleInputChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.handleInputChange}
        />
        <label htmlFor="language">language</label>
        <select
          name="language"
          id="language"
          value={this.state.language}
          onChange={this.handleInputChange}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
