import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("CLICKED");
  }
  return <button onClick={clickHandler}>Click</button>;
}

export default FunctionClick;
