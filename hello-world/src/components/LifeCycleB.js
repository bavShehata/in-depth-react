import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "bavly" };
    console.log("Cycle B Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Cycle B get derived state from props");
    return null;
  }

  componentDidMount() {
    console.log("Cycle B did mount");
  }
  shouldComponentUpdate() {
    console.log("Cycle B should update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Cycle B get snapshot");
    return null;
  }
  componentDidUpdate() {
    console.log("Cycle B component update");
  }
  changeState = () => {
    this.setState({ name: "Bova" });
  };
  render() {
    console.log("Cycle B Render");
    return (
      <div>
        Cycle B <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default LifeCycleB;
