import "./AuthRequest.css";
import { useNavigate } from "react-router-dom";
export const AuthRequest = () => {
  const navigate=useNavigate()
  
  return (

    <div className="request-main-case">
      <h1>Don’t miss what’s happening</h1>
      {/* <Link > */}
        <button id="login-animation" className="menu-button" onClick={()=>navigate("/login")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          login here
        </button>
      {/* </Link> */}

      <img
        src="https://images.squarespace-cdn.com/content/v1/5630dfc6e4b0303d4aea132b/1553073872212-WAQSZANTLRTH1BOI64FD/08_Movie.gif?format=500w"
        alt=""
      />
    </div>
  );
};
