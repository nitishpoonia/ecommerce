import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ children }) => {
  const auth = isAuthenticated();
  return auth ? <>{children}</> : <Navigate to="/signin" />;
};

export default AdminRoute;
