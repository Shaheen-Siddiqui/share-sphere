import { useContext } from "react";
import { AuthContext } from "./hook/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
export { RequireAuth as default };
