import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { makeServer } from "./server";
import { AuthContextProvider } from "./frontend/hook/context/AuthContext";
import { PostContextProveder } from "./frontend/hook/context/PostContext";
import { PostCRUDContextProvider } from "./frontend/hook/context/PostCRUDContext";
import { FollowUserContextProvider } from "./frontend/hook/context/FollowUserContext";
import { UserContextProvider } from "./frontend/hook/context/UserContext";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UserContextProvider>

        <FollowUserContextProvider>
          <PostCRUDContextProvider>
            <PostContextProveder>
              <App />
            </PostContextProveder>
          </PostCRUDContextProvider>
        </FollowUserContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
