import { Suspense, lazy } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
const MobileHeader=lazy(()=>import("./frontend/components/Header/Header"))
const MobileFooter=lazy(()=>import("./frontend/components/Footer/Footer"))


function App() {
  return (
    <div className="App">
      <Suspense fallback="loading...">

    <MobileHeader/>
    <MobileFooter/>
    </Suspense> 
   </div>
  );
}

export default App;
