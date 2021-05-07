import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
const DocTitleOne = () => {
  const [counter, setCounter] = useState(0);
  const incrementCount = () => setCounter((prevCounter) => prevCounter + 1);

  useDocumentTitle(counter);
  return (
    <div>
      <button onClick={incrementCount}>{counter}</button>
    </div>
  );
};
export default DocTitleOne;
