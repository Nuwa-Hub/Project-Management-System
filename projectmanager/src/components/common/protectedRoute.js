import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logOut } from "../../redux/apiCalls";


function ProtectedRoute({ element, path }) {
  const user = useSelector((state) => state?.user?.currentUser);
  const dispatch = useDispatch();

  if (user == null) {
    return <Navigate to="/login" />;
  }
  else{
    if (user.isAdmin) return element;
    else{
      logOut(dispatch);
    }
  }
  return user.isAdmin ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
