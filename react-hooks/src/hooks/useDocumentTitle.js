import { useState, useEffect } from "react";
const useDocumentTitle = (counter) => {
  useEffect(() => {
    document.title = counter;
  }, [counter]);
};
export default useDocumentTitle;
