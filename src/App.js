import Mockman from "mockman-js";

// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

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
const EditModal = lazy(() =>
  import("./frontend/components/PostModal/EditPost")
);

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{ fontSize: "1.5rem" }}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
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
        {/* <div style={{ marginTop: "6.7rem" }}> */}
        <MobileHeader />
        <MobileFooter />

        <Routes>
          {/* ----------PRIVATE ROUTES---------- */}
          <Route
            path="/home"
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/bookmark"
            index
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
          <Route index path="/login" element={<LogIn />} />
          <Route index path="/signup" element={<SignUp />} />
          <Route index path="/mock" element={<Mockman />} />
          <Route index exact path="/" element={<Explore />} />
        </Routes>
        <PostModal />
        <EditModal />
      </Suspense>
    </div>
  );
}

export { App as default };
