import React from "react";

function ChildComponent({ greetHandler }) {
  return (
    <div>
      <button onClick={() => greetHandler("child")}>Greet parent</button>
    </div>
  );
}

export default ChildComponent;
