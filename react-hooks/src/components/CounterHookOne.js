import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
const CounterHookOne = () => {
  const [count, resetCount, addCount, removeCount] = useCounter();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={resetCount}>Reset</button>
      <button onClick={() => addCount()}>Increment</button>
      <button onClick={removeCount}>Decrement</button>
    </div>
  );
};
export default CounterHookOne;
