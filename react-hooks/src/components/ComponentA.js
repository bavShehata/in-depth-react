import React, { useState, useEffect, useContext } from "react";
import { CounterContext } from "../App";

const ComponentA = () => {
  const { count, dispatch } = useContext(CounterContext);
  return (
    <div>
      Component A{" "}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
export default ComponentA;
