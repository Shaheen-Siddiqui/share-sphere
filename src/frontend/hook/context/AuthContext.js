import { createContext, useReducer } from "react";
import { authReducer } from "../reducer/AuthReducer";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthStateDispatch] = useReducer(authReducer, {});
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
