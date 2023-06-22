import Mockman from "mockman-js";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//internal imports

import "./App.css";
import { RequireAuth } from "./frontend/RequireAuth";
const MobileHeader = lazy(() => import("./frontend/components/Header/Header"));
const MobileFooter = lazy(() => import("./frontend/components/Footer/Footer"));
const Explore = lazy(() => import("./frontend/pages/Explore/Explore"));
const Home = lazy(() => import("./frontend/pages/Home/Home"));
const BookMark = lazy(() => import("./frontend/pages/BookMark/BookMark"));
const UserProfile = lazy(() =>
  import("./frontend/pages/UserProfile/UserProfile")
);
const LogIn = lazy(() => import("./frontend/pages/authentication/Login"));
const SignUp = lazy(() => import("./frontend/pages/authentication/Signup"));

const PostModal = lazy(() =>
  import("./frontend/components/PostModal/PostModal")
);

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
        <div style={{ marginTop: "6.7rem" }}>
          <MobileFooter />
          <Routes>
            <Route path="/" element={<Explore />} />
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
              path="/profile"
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
          <PostModal/>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
