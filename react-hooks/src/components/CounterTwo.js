import React, { useState, useEffect, useReducer } from "react";
const CounterTwo = () => {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          firstCounter: state.firstCounter + action.value,
        };
      case "decrement":
        return {
          ...state,
          firstCounter: state.firstCounter - action.value,
        };
      case "increment2":
        return {
          ...state,
          secondCounter: state.secondCounter + action.value,
        };
      case "decrement2":
        return {
          ...state,
          secondCounter: state.secondCounter - action.value,
        };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>
        {count.firstCounter} - {count.secondCounter}
      </h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 4 })}>
        Increment 4
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 4 })}>
        Decrement 4
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
export default CounterTwo;
