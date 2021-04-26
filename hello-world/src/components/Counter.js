import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState({ count: this.state.count + 1 });
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <button onClick={() => this.incrementFive()}>Add counter</button>
        The count is at {this.state.count}
      </div>
    );
  }
}

export default Counter;
