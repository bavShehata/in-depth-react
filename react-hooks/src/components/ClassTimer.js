import React, { Component } from "react";

export class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  clearCounter = () => {
    // this.setState({ counter: 0 });
    clearInterval(this.interval);
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        Class Timer - {this.state.counter}
        <button onClick={this.clearCounter}>Clear</button>
      </div>
    );
  }
}

export default ClassTimer;
