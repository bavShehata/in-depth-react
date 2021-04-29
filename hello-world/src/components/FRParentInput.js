import React, { Component, createRef } from "react";
import FRInput from "./FRInput";

export class FRParentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }
  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
