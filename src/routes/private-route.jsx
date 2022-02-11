import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { authed } = useSelector((state) => state.user);

  if (!authed) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export { PrivateRoute };
