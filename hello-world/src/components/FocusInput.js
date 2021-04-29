import React, { Component, createRef } from "react";
import Input from "./Input";

export class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.compRef = createRef();
  }
  clickHandler = () => {
    this.compRef.current.focusInput();
  };
  render() {
    return (
      <>
        <Input ref={this.compRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </>
    );
  }
}

export default FocusInput;
