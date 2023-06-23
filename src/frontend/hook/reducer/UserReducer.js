export const userReducer = (userState, { type, payload }) => {
  switch (type) {
    case "USER_FUNCTION":
      return {
        ...userState,
        allUsers:payload
      };
    default:
      break;
  }
};
