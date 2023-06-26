import axios from "axios";
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { followReducer } from "../reducer/FollowReducer";
import { UserContext } from "./UserContext";

export const FollowUserContext = createContext();

export const FollowUserContextProvider = ({ children }) => {
  const { userState, dispatchUserState } = useContext(UserContext);
  const [{ followUserData }, dispatchFollowState] = useReducer(followReducer, {
    // followUserData: {},
  });

  const whoIsFollowed = (_id) => {};

  const followActionService = async (followUserId) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      dispatchUserState({
        type: "EDITED_USER_PROFILE",
        payload: response.data.followUser,
      });
      dispatchUserState({
        type: "EDITED_USER_PROFILE",
        payload: response.data.user,
      });

      console.log(response.data, "followed user");
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <FollowUserContext.Provider value={{ followActionService, whoIsFollowed }}>
      {children}
    </FollowUserContext.Provider>
  );
};
