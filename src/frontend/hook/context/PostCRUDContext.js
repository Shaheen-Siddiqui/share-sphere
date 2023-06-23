import axios from "axios";
import { createContext, useReducer, useState } from "react";
import { PostCRUDReducer } from "../reducer/PostCRUDReducer";
import { toast } from "react-hot-toast";

export const PostCRUDContext = createContext(null);

export const PostCRUDContextProvider = ({ children }) => {
  const [{ postContent, allPosts }, dispatchPostCRUD] = useReducer(
    PostCRUDReducer,
    {
      allPosts: [],
      postContent: "",
    }
  );

  const currentUserImage = JSON.parse(localStorage.getItem("user"));

  const [postEDCToggle, setPostEDCToggle] = useState({});
  const [msgDCToggale, setMsgDCToggale] = useState({});

  const ShowPostEDCCase = (index) => {
    setPostEDCToggle((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };
  const ShowMsgDCCase = (index) => {
    setMsgDCToggale((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  const createNewPost = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/api/posts",
        {
          postData: {
            content: postContent,
            postedImages: null,
            imgUrl: currentUserImage?.imgUrl,
          },
        },
        { headers: { authorization: encodedToken } }
      );
      dispatchPostCRUD({ type: "POST_FUNCTION", payload: response.data.posts });
    } catch (error) {
      console.log(error);
    }
  };
  const obtainAllPostService = async () => {
    try {
      const response = await axios.get("/api/posts");
      dispatchPostCRUD({
        type: "POST_FUNCTION",
        payload: response.data.posts,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const editPostService = async (_id, postContent) => {
    const encodedToken = localStorage.getItem("token");
    console.log(_id, postContent, 'test');
    try {
      const response = await axios.post(
        `/api/posts/edit/${_id}`,
        {
          postData: {
            content: postContent,
          },
        },
        { headers: { authorization: encodedToken } }
      );
      dispatchPostCRUD({
        type: "EDIT_POST",
        payload: response.data.posts,
      });
      console.log(response.data.posts, "here");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteParticularPost = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/posts/${_id}`, {
        headers: { authorization: encodedToken },
      });
      dispatchPostCRUD({
        type: "POST_FUNCTION",
        payload: response.data.posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/posts/like/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      dispatchPostCRUD({
        type: "POST_FUNCTION",
        payload: response.data.posts,
      });
      toast.success("Liked");
    } catch (error) {
      toast.error("already liked");
      console.log(error);
    }
  };

  return (
    <PostCRUDContext.Provider
      value={{
        ShowMsgDCCase,
        ShowPostEDCCase,
        dispatchPostCRUD,
        createNewPost,
        deleteParticularPost,
        obtainAllPostService,
        allPosts,
        postEDCToggle,
        msgDCToggale,
        likePost,
        editPostService,
      }}
    >
      {children}
    </PostCRUDContext.Provider>
  );
};
