import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext();

export const PostContextProveder = ({ children }) => {
  const [togglePostModal, setTogglePostModal] = useState(false);

  return (
    <PostContext.Provider value={{ togglePostModal, setTogglePostModal }}>
      {children}
    </PostContext.Provider>
  );
};
