import React from "react";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div>
      <h2>SHARED LAYOUT</h2>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
