import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";
// import { followReducer } from "../reducer/FollowReducer";
import { UserContext } from "./UserContext";

export const FollowUserContext = createContext();

export const FollowUserContextProvider = ({ children }) => {
  const { dispatchUserState } = useContext(UserContext);
  

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
    } catch (error) {
      console.log(error);
    }
  };

  const unFollowActionServise = async (unFoolwUserId) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/users/unfollow/${unFoolwUserId}`,
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FollowUserContext.Provider
      value={{ followActionService, unFollowActionServise }}
    >
      {children}
    </FollowUserContext.Provider>
  );
};
