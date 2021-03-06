import React, { useState, useEffect, useContext } from "react";
import { CounterContext } from "../App";
const ComponentF = () => {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div>
      Component F{" "}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
export default ComponentF;
