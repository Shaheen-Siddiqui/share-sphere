import { useReducer } from "react";
import { createContext } from "react";
import { followReducer } from "../reducer/FollowReducer";
import axios from "axios";

export const FollowUserContext = createContext();

export const FollowUserContextProvider = ({ children }) => {
  const [followState, dispatchFollowState] = useReducer(followReducer, {
    followUser: [],
  });

  const followActionService = async (followUserId) => {
    // const encodedToken = localStorage.getItem("token");
    // try {
    //   const response = await axios.post(
    //     `/api/users/follow/${followUserId}`,
    //     {},
    //     { headers: { authorization: encodedToken } }
    //   );
    //   console.log(response.data.user);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return <FollowUserContext.Provider value={{followActionService}}>{children}</FollowUserContext.Provider>;
};
