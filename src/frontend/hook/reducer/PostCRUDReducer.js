export const PostCRUDReducer = (postCRUDState, { type, payload }) => {
  switch (type) {
    case "POST_FUNCTION":
      return {
        ...postCRUDState,
        allPosts: payload,
      };
    case "CREATE_NEW_POST":
      return {
        ...postCRUDState,
        allPosts: payload,
        postedImages: null,
      };

    case "POST_CONTENT":
      return {
        ...postCRUDState,
        postContent: payload,
      };
    case "EDIT_POST":
      return {
        ...postCRUDState,
        allPosts: payload,
      };
    case "COMMENT":
      const { value, _id } = payload;

      return {
        ...postCRUDState,
        allPosts: postCRUDState.allPosts?.map((item) =>
          item._id === _id ? { ...item, commentedData: value } : item
        ),
      };

    case "POST_COMMENT_MESSAGE":
      return {
        ...postCRUDState,
        allPosts: postCRUDState.allPosts.map((item) =>
          item._id === payload
            ? { ...item, comment: [...item.comment, item.commentedData] }
            : item
        ),
       
      };
    case "POST_IMAGE":
      return {
        ...postCRUDState,
        postedImages: payload,
      };
    case "DELETE_SELECTED_IMAGE":
      return {
        ...postCRUDState,
        postedImages: postCRUDState.postedImages.filter(
          (_id, index) => index !== payload
        ),
      };

    default:
      throw new Error(`invelid type ${type} check PostCRUDReducer`);
  }
};
