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

  shouldComponentUpdate() {
    console.log("Cycle A should update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Cycle A get snapshot");
    return null;
  }
  componentDidUpdate() {
    console.log("Cycle A component update");
  }
  changeState = () => {
    this.setState({ name: "Bova" });
  };
  render() {
    console.log("Cycle A Render");
    return (
      <div>
        Cycle A<button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
