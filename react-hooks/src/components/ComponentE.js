import React, { useState, useEffect, useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";
const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <ComponentF />
      {user} and {channel}
    </div>
  );
};
export default ComponentE;
