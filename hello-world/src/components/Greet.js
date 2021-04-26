import React from "react";
const Greet = ({ name, children }) => (
  <div>
    <h1>Hello {name} From function</h1>
    {children}
  </div>
);
export default Greet;
