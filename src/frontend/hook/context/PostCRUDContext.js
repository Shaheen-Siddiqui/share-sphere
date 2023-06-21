import { createContext } from "react";

export const PostCRUDContext = createContext(null);
export const PostCRUDContextProvider = ({ children }) => {
  return <PostCRUDContext.Provider>{children}</PostCRUDContext.Provider>;
};
