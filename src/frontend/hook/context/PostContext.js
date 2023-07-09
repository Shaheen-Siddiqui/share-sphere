import axios from "axios";
import { useState, useReducer, createContext } from "react";
import { PostReducer } from "../reducer/PostReducer";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { PostCRUDContext } from "./PostCRUDContext";

export const PostContext = createContext();

export const PostContextProveder = ({ children }) => {
  const { allPosts } = useContext(PostCRUDContext);

  const [postEdit, setPostEdit] = useState();
  const [previousPost, setPreviousPost] = useState("");
  const [togglePostModal, setTogglePostModal] = useState(false);
  const [toggleEditModal, setToggleEditModal] = useState(false);

  const [postState, dispatchPostState] = useReducer(PostReducer, {
    userBookMark: [],
    
  });

  const isBookMarked = (_id) =>
    postState?.userBookMark.find((item) => item._id === _id);

  const filterTrands = () => {
    const filteredPostData = allPosts.sort(
      (a, b) => b.likes.likeCount - a.likes.likeCount
    );
    dispatchPostState({ type: "TRANDING_POSTS", payload: filteredPostData });
  };

  const filterLatest = () => {
    const filterDataPost = allPosts.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    dispatchPostState({ type: "LATEST_POSTS", payload: filterDataPost });
  };

  const addToBookMark = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/users/bookmark/${_id}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatchPostState({
        type: "BOOKMARKED_FUNCTION",
        payload: response.data.bookmarks,
      });
      toast.success("Post BookMarked!");
    } catch (error) {
      toast.error("This Post is already bookmarked");
    }
  };

  const obtainAllBookMarks = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/users/bookmark", {
        headers: { authorization: encodedToken },
      });
      dispatchPostState({
        type: "BOOKMARKED_FUNCTION",
        payload: response.data.bookmarks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookMarkedPost = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      dispatchPostState({
        type: "BOOKMARKED_FUNCTION",
        payload: response.data.bookmarks,
      });
      toast.success("Removed From BookMark!");
    } catch (error) {}
  };

  // const displikePost = async (_id) => {
  //   const encodedToken = localStorage.getItem("token");
  //   try {
  //     const response = await axios.post(
  //       `/api/posts/dislike/${_id}`,
  //       {},
  //       { headers: { authorization: encodedToken } }
  //     );
  //     dispatchPostState({ type: "POST_FUNCTION", payload: response.data.post });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <PostContext.Provider
      value={{
        togglePostModal,
        setTogglePostModal,
        addToBookMark,
        obtainAllBookMarks,
        deleteBookMarkedPost,
        filterTrands,
        filterLatest,
        postState,
        toggleEditModal,
        setToggleEditModal,
        postEdit,
        setPostEdit,
        previousPost,
        setPreviousPost,
        isBookMarked,
        dispatchPostState,
       
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
