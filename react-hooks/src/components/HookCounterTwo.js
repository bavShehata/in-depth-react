import React, { useState } from "react";
const HookCounterTwo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount((prevState) => prevState + 5)}>
        Increment by 5
      </button>
    </div>
  );
};
export default HookCounterTwo;
