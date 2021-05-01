import React, { Component } from "react";

export class ClickCounterTwo extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incCount}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default ClickCounterTwo;
