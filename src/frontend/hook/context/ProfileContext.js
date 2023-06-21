import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
  // const [login, setLogin] = useState(false);

  return <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>;
};
