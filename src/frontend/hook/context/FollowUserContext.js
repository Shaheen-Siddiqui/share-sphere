import axios from "axios";
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { followReducer } from "../reducer/FollowReducer";
import { UserContext } from "./UserContext";

export const FollowUserContext = createContext();

export const FollowUserContextProvider = ({ children }) => {
  const { userState } = useContext(UserContext);
  const [{ followUserData }, dispatchFollowState] = useReducer(followReducer, {
    followUserData: {},
  });

  // console.log(followUserData?.followUser?.followers);
  const whoIsFollowed = (_id) => {
    // const alpha = followUserData?.followUser?.followers?.find((item) => item._id == _id);
    // console.log(alpha);
    // return alpha;
  };

  const followActionService = async (followUserId) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      dispatchFollowState({ type: "FOLLOW_FUNCTIONS", payload: response.data });
      console.log(response.data,'followed user');
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
