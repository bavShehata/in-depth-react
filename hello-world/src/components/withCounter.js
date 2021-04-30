import React, { Component } from "react";

const withCounter = (WrappedComponent, incNum = 1) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incCount = () => {
      // this.setState({ count: this.state.count + 1 });
      this.setState((prevState) => {
        return {
          count: prevState.count + incNum,
        };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incCount={this.incCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
