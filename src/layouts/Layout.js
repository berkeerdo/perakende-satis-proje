import React from "react";

function Layout({ children }) {
  return (
    <div
      className="layout "
      style={{ overflow: "hidden" }}
    >
      {children}
    </div>
  );
}

export default Layout;
