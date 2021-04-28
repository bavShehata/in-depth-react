import React from "react";

function NameList() {
  const names = ["Bavly", "Drake", "Jade"];
  return (
    <div>
      {names.map((name, i) => (
        <h2 key={i}>{name}</h2>
      ))}
    </div>
  );
}

export default NameList;
