import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
const CounterHookTwo = () => {
  const [count, resetCount, addCount, removeCount] = useCounter(10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={resetCount}>Reset</button>
      <button onClick={() => addCount(5)}>Increment</button>
      <button onClick={removeCount}>Decrement</button>
    </div>
  );
};
export default CounterHookTwo;
