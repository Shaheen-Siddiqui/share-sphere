export const PostCRUDReducer = (postCRUDState, { type, payload }) => {
  switch (type) {
    case "POST_FUNCTION":
      return {
        ...postCRUDState,
        allPosts: payload,
      };

    case "POST_CONTENT":
      return {
        ...postCRUDState,
        postContent: payload,
      };
    case "EDIT_POST":
      return {
        ...postCRUDState,
        allPosts:payload
      };

    default:
      throw new Error(`invelid type ${type} check PostCRUDReducer`);
  }
};
