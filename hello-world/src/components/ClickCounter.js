import React, { Component } from "react";
import withCounter from "./withCounter";

export class ClickCounter extends Component {
  render() {
    return (
      <button onClick={this.props.incCount}>
        Clicked {this.props.count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
