export const userReducer = (userState, { type, payload }) => {
  switch (type) {
    case "USER_FUNCTION":
      return {
        ...userState,
        allUsers: payload,
      };
    case "SINGLE_USER":
      return {
        ...userState,
        singleUser: payload,
      };
    case "EDITED_USER_PROFILE": {
      const newAllUserState = userState.allUsers.map((item) =>
        item._id === payload._id ? payload : item
      );
      return {
        ...userState,
        allUsers: newAllUserState,
      };
    }
   
    default:
      break;
  }
};
