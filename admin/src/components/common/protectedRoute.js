import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element, path }) {
  const user = useSelector((state) => state.user.currentUser);

  if (user == null) {
    return <Navigate to="/login" />;
  }
  return user.isAdmin ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
