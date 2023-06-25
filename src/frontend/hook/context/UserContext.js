import { useReducer, createContext, useContext } from "react";
import { userReducer } from "../reducer/UserReducer";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userState, dispatchUserState] = useReducer(userReducer, {
    allUsers: [],
  });
  const { allUsers } = userState;

  const currentUserInfo = allUsers?.find(
    (item) => item.username === user.username
  );

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

  return (
    <UserContext.Provider value={{ userState, obtainAllUserService,currentUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
