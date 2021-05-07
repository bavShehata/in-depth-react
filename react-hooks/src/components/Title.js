import React, { useState, useEffect } from "react";
const Title = () => {
  console.log("rendering titles");
  return (
    <div>
      <h2>useCallback hook</h2>
    </div>
  );
};
export default React.memo(Title);
