import axios from "axios";
import { useState, useReducer, useEffect, createContext } from "react";
import { PostReducer } from "../reducer/PostReducer";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const PostContext = createContext();

export const PostContextProveder = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [togglePostModal, setTogglePostModal] = useState(false);
  const [postState, dispatchPostState] = useReducer(PostReducer, {
    allPosts: [],
    userBookMark: [],
  });
  const { allPosts, userBookMark } = postState;

  const filterTrands = () => {
    const filteredPostData = [...allPosts].sort(
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

  const obtainAllPostService = async () => {
    try {
      const response = await axios.get("/api/posts");
      dispatchPostState({
        type: "POST_FUNCTION",
        payload: response.data.posts,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteParticularPost = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/posts/${_id}`, {
        headers: { authorization: encodedToken },
      });
      dispatchPostState({
        type: "POST_FUNCTION",
        payload: response.data.posts,
      });
    } catch (error) {
      console.log(error);
    }
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

  const likePost = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/posts/like/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      dispatchPostState({
        type: "POST_FUNCTION",
        payload: response.data.posts,
      });
      toast.success("Liked");
    } catch (error) {
      toast.error("already liked");
      console.log(error);
    }
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
        deleteParticularPost,
        obtainAllPostService,
        addToBookMark,
        postState,
        obtainAllBookMarks,
        userBookMark,
        deleteBookMarkedPost,
        likePost,
        allPosts,
        filterTrands,
        filterLatest,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
