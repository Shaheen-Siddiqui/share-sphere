import { useReducer, createContext, useContext } from "react";
import { userReducer } from "../reducer/UserReducer";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userState, dispatchUserState] = useReducer(userReducer, {
    allUsers: [],
    singleUser: {},
   
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

  const getParticularUser = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      dispatchUserState({ type: "SINGLE_USER", payload: response.data.user });
    } catch (error) {
      console.log(error);
    }
  };

  const editUserProfile = async (data) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/users/edit`,
        {
          userData: {
            ...data,
          },
        },
        { headers: { authorization: encodedToken } }
      );
      dispatchUserState({
        type: "EDITED_USER_PROFILE",
        payload: response.data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        obtainAllUserService,
        currentUserInfo,
        getParticularUser,
        editUserProfile,
        dispatchUserState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
