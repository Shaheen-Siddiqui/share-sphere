import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const MobileHeader = lazy(() => import("./frontend/components/Header/Header"));
const MobileFooter = lazy(() => import("./frontend/components/Footer/Footer"));

const Explore = lazy(() => import("./frontend/pages/Explore/Explore"));
function App() {
  return (
    <Suspense fallback="loading...">
      <MobileHeader />
      <div style={{ marginTop: "6.7rem" }}>
        <MobileFooter />
        <Explore/>
      </div>
    </Suspense>
  );
}

export default App;
