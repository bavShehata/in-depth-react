import React, { Component } from "react";
import withCounter from "./withCounter";

export class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incCount}>
          Hovered {this.props.count} times
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
