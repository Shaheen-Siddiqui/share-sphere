import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const MobileHeader = lazy(() => import("./frontend/components/Header/Header"));
const MobileFooter = lazy(() => import("./frontend/components/Footer/Footer"));
const Explore = lazy(() => import("./frontend/pages/Explore/Explore"));
const Home = lazy(() => import("./frontend/pages/Home/Home"));

function App() {
  return (
    <Suspense fallback="loading...">
      <MobileHeader />
      <div style={{ marginTop: "6.7rem" }}>
        {/* Mobile view */}
        <MobileFooter />
        {/* ----------- */}
      
        <Home />
      </div>
    </Suspense>
  );
}

export default App;
