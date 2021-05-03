import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = (val) => {
    this.setState((prevState) => {
      return {
        count: prevState.count + val,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <button onClick={() => this.incrementCount(5)}>Increment</button>
      </div>
    );
  }
}

export default ClassCounter;
