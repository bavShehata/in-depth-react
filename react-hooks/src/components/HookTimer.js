import React, { useState, useEffect, useRef } from "react";
const HookTimer = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef();
  const stopCounter = () => {
    clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [counter]);
  return (
    <div>
      {counter} <button onClick={stopCounter}>Stop Counter</button>
    </div>
  );
};
export default HookTimer;
