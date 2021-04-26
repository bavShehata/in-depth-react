import React, { Component } from "react";
class ClassClick extends Component {
  clickHandler() {
    console.log("CLick from class");
  }
  render() {
    return <button onClick={this.clickHandler}>Click from Class</button>;
  }
}

export default ClassClick;
