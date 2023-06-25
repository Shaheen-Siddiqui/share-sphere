export const followReducer = (followState, { type, payload }) => {
  switch (type) {
    case "FOLLOW_FUNCTIONS":
      return {
        ...followState,
        followUserData: payload,
      };

    default:
      break;
  }
};
