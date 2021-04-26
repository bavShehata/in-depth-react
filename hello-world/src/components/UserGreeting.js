import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  logOut = () => {
    this.setState({ isLoggedIn: false });
  };
  logIn = () => {
    this.setState({ isLoggedIn: true });
  };
  render() {
    if (this.state.isLoggedIn)
      return (
        <div>
          <h1>Welcome Bavly</h1>
          <button onClick={this.logOut}>Log Out</button>
        </div>
      );
    else
      return (
        <div>
          <h1>Welcome Guest</h1>
          <button onClick={this.logIn}>Log In</button>
        </div>
      );
    return (
      <div>
        <h1>Welcome Guest</h1>
        <h1>Welcome Bavly</h1>
      </div>
    );
  }
}

export default UserGreeting;
