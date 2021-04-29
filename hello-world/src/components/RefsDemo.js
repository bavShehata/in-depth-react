import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbref = null;
    this.setcbref = (element) => {
      this.cbref = element;
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
    if (this.cbref) this.cbref.focus();
  }
  clickHandler = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="demo"
          id="demo"
          placeholder="DEMO"
          ref={this.inputRef}
        />
        <input
          type="text"
          name="demo"
          id="demo"
          placeholder="DEMO"
          ref={this.setcbref}
        />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
