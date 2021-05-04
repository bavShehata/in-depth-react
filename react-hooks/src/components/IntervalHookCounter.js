import React, { useState, useEffect } from "react";
const IntervalHookCounter = () => {
  const [counter, setCounter] = useState(0);
  const tick = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    const inter = setInterval(tick, 1000);
    return () => {
      console.log("object");
      window.clearInterval(inter);
    };
  }, [counter]);
  return <div>{counter}</div>;
};
export default IntervalHookCounter;
