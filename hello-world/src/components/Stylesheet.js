import React from "react";
import "./myStyles.css";
function Stylesheet({ primary }) {
  const classN = primary ? "primary" : "";

  return (
    <div>
      <h1 className={`${classN} fontXl`}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
