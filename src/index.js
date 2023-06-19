import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProfileContextProvider } from "./frontend/hook/context/ProfileContext";

import { makeServer } from "./server";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileContextProvider>
        <App />
      </ProfileContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
