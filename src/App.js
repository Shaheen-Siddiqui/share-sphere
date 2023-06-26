import Mockman from "mockman-js";

import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//internal imports

import "./App.css";
import { RequireAuth } from "./frontend/RequireAuth";

import { Home } from "./frontend/pages/Home/Home";
import { BookMark } from "./frontend/pages/BookMark/BookMark";
import { Explore } from "./frontend/pages/Explore/Explore";
import { LogIn } from "./frontend/pages/authentication/Login";

const MobileHeader = lazy(() => import("./frontend/components/Header/Header"));
const MobileFooter = lazy(() => import("./frontend/components/Footer/Footer"));
// const Explore = lazy(() => import("./frontend/pages/Explore/Explore"));
// const Home = lazy(() => import("./frontend/pages/Home/Home"));
// const BookMark = lazy(() => import("./frontend/pages/BookMark/BookMark"));
const UserProfile = lazy(() =>
  import("./frontend/pages/UserProfile/UserProfile")
);
// const LogIn = lazy(() => import("./frontend/pages/authentication/Login"));
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
      {/* <Suspense fallback="loading..."> */}
      <MobileHeader />
      <div style={{ marginTop: "6.7rem" }}>
        <MobileFooter />
        <Routes>
          <Route path="/">
            <Route index element={<Explore />} />
            <Route path="home" element={<Home />} />
            <Route path="bookmark" element={<BookMark />} />
            <Route path="login" element={<LogIn />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
        ;{/* <Routes> */}
        {/* ----------PRIVATE ROUTES---------- */}
        {/* <Route
            path="/home"
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          /> */}
        {/* <Route
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
          <Route
            path="/profile/:userID"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          /> */}
        {/* ----------PRIVATE ROUTES---------- */}
        {/* <Route index path="/login" element={<LogIn />} />
          <Route index path="/signup" element={<SignUp />} />
          <Route index path="/mock" element={<Mockman />} />
          <Route index exact path="/" element={<Explore />} /> */}
        {/* </Routes> */}
        <PostModal />
        <EditModal />
      </div>
      {/* </Suspense> */}
    </div>
  );
}

export default App;

// <Routes>
//   <Route path="/">
//     <Route index element={<Explore />} />
//     <Route path="home" element={<Home />} />
//     <Route path="bookmark" element={<BookMark />} />
//     <Route path="login" element={<LogIn />} />
//     <Route path="*" element={<NoMatch />} />
//   </Route>
// </Routes>;
