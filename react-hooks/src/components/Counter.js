import React, { useState, useEffect, useCallback, useMemo } from "react";
const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Increment {counterOne}</button>
        <span>{isEven ? "EVEN" : "ODD"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Increment {counterTwo}</button>
      </div>
    </div>
  );
};
export default Counter;
