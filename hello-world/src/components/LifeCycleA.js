import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "bavly" };
    console.log("Cycle A Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Cycle A get derived state from props");
    return null;
  }

  componentDidMount() {
    console.log("Cycle A did mount");
  }
  render() {
    console.log("Cycle A Render");
    return (
      <div>
        Cycle A
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
