import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProfileContextProvider } from "./frontend/hook/context/ProfileContext";

import { makeServer } from "./server";
import { AuthContextProvider } from "./frontend/hook/context/AuthContext";
import { PostContextProveder } from "./frontend/hook/context/PostContext";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>


        <PostContextProveder>
          <ProfileContextProvider>
            <App />
          </ProfileContextProvider>
        </PostContextProveder>

        
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);