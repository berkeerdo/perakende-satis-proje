import React from "react";

function Wrapper({ children }) {
  return <div className="layout " style={{overflow: "hidden"}}>{children}</div>;
}

export default Wrapper;
