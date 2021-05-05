import React, { useState, useEffect, useReducer } from "react";
const CounterOne = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
export default CounterOne;
