export const PostReducer = (postState, { type, payload }) => {
  switch (type) {
    case "POST_FUNCTION":
      return {
        ...postState,
        allPosts: payload,
      };
    case "BOOKMARKED_FUNCTION":
      return {
        ...postState,
        userBookMark: payload,
      };
    case "TRANDING_POSTS":
      return {
        ...postState,
        allPosts: payload,
      };
    case "LATEST_POSTS":
      return {
        ...postState,
        allPosts: payload,
      };
    default:
      break;
  }
};
