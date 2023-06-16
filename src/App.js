import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const MobileHeader = lazy(() => import("./frontend/components/Header/Header"));
const MobileFooter = lazy(() => import("./frontend/components/Footer/Footer"));
const Explore = lazy(() => import("./frontend/pages/Explore/Explore"));
const Home = lazy(() => import("./frontend/pages/Home/Home"));
const BookMark = lazy(() => import("./frontend/pages/BookMark/BookMark"));
const UserProfile=lazy(()=>import("./frontend/pages/UserProfile/UserProfile"))
const PostModal = lazy(() =>
  import("./frontend/components/PostModal/PostModal")
);

function App() {
  return (
    <Suspense fallback="loading...">
      <MobileHeader />
      <div style={{ marginTop: "6.7rem" }}>
        <MobileFooter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/profile" element={<UserProfile/>} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
