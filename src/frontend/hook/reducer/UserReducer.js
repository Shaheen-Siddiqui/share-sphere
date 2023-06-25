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
    default:
      break;
  }
};
