import { createContext, useState } from "react";

export const PostCRUDContext = createContext(null);

export const PostCRUDContextProvider = ({ children }) => {
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

  return (
    <PostCRUDContext.Provider
      value={{
        ShowMsgDCCase,
        ShowPostEDCCase,
        postEDCToggle,
        msgDCToggale,
      }}
    >
      {children}
    </PostCRUDContext.Provider>
  );
};
