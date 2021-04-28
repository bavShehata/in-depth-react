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
  render() {
    console.log("Cycle B Render");
    return <div>Cycle B</div>;
  }
}

export default LifeCycleB;
