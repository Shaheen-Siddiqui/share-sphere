import Mockman from "mockman-js";

import {  lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//internal imports

import "./App.css";
import { RequireAuth } from "./frontend/RequireAuth";



// import {Home} from './frontend/pages/Home/Home'
// import {BookMark} from './frontend/pages/BookMark/BookMark'
// import {Explore} from './frontend/pages/Explore/Explore'
import {LogIn} from './frontend/pages/authentication/Login'





// import MobileHeader from "./frontend/components/Header/Header"
// import MobileFooter from "./frontend/components/Footer/Footer"
import UserProfile from "./frontend/pages/UserProfile/UserProfile"
import SignUp from "./frontend/pages/authentication/Signup"
import PostModal from "./frontend/components/PostModal/PostModal"
import EditModal from "./frontend/components/PostModal/EditPost"
const MobileHeader = lazy(() => import("./frontend/components/Header/Header"));
const MobileFooter = lazy(() => import("./frontend/components/Footer/Footer"));
const Explore = lazy(() => import("./frontend/pages/Explore/Explore"));
const Home = lazy(() => import("./frontend/pages/Home/Home"));
const BookMark = lazy(() => import("./frontend/pages/BookMark/BookMark"));

function App() {
  return (
    <div>
      {/* toast messages */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{ fontSize: "1.5rem" }}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Suspense fallback="loading...">
        <MobileHeader />
        {/* </Suspense> */}
        <div style={{ marginTop: "6.7rem" }}>
          <MobileFooter />
          <Routes>
            <Route exact index path="/" element={<Explore />} />
            {/* ----------PRIVATE ROUTES---------- */}
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/bookmark"
              element={
                <RequireAuth>
                  <BookMark />
                </RequireAuth>
              }
            />
            <Route
              path="/profile/:userID"
              element={
                <RequireAuth>
                  <UserProfile />
                </RequireAuth>
              }
            />
            {/* ----------PRIVATE ROUTES---------- */}
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mock" element={<Mockman />} />
          </Routes>
          <PostModal />
          <EditModal />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
