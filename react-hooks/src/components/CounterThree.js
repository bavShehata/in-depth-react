import React, { useState, useEffect, useReducer } from "react";
const CounterThree = () => {
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
  const [countTwo, dispatchTwo] = useReducer(reducer, 0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <h3>{countTwo}</h3>
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
};
export default CounterThree;
