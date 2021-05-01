import React, { Component } from "react";

export class HoverCounterTwo extends Component {
  render() {
    return (
      <h2 onMouseOver={this.props.incCount}>
        Hovered {this.props.count} times
      </h2>
    );
  }
}

export default HoverCounterTwo;
