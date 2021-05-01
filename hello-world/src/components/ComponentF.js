import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>{(username) => <div>Hello {username}</div>}</UserConsumer>
    );
  }
}

export default ComponentF;
