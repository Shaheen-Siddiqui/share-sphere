import { useContext } from "react";
import { AuthContext } from "./hook/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  return children;
  
};
export { RequireAuth as default };
