import React, { useState } from "react";
const HookCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};
export default HookCounter;
