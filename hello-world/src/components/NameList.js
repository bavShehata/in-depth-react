import React from "react";

function NameList() {
  const names = ["Bavly", "Drake", "Jade"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

export default NameList;
