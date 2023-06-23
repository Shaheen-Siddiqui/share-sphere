import { useReducer, createContext } from "react";
import { userReducer } from "../reducer/UserReducer";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userState, dispatchUserState] = useReducer(userReducer, {
    allUsers: [],
  });

  const obtainAllUserService = async () => {
    try {
      const response = await axios.get("/api/users");
      dispatchUserState({
        type: "USER_FUNCTION",
        payload: response.data.users,
      });
    } catch (error) {
      console.log(error);
    }
  };
//   obtainAllUserService();

  return <UserContext.Provider value={{userState,obtainAllUserService}}>{children}</UserContext.Provider>;
};
