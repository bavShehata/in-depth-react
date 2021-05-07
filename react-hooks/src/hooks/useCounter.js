import { useState, useEffect } from "react";
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const resetCount = () => setCount(initialValue);
  const addCount = (value = 1) => setCount(count + value);
  const removeCount = () => setCount(count - 1);
  return [count, resetCount, addCount, removeCount];
};
export default useCounter;
