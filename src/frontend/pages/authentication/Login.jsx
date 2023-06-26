import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./authentication.css";
import "../Home/Home.css";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { useContext } from "react";
import { AuthContext } from "../../hook/context/AuthContext";

export const LogIn = () => {
  console.log("Hi");
  const { loginService } = useContext(AuthContext);
  const location = useLocation();
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [userLoginCredential, setUserLoginCredential] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userLoginCredential;
  const redirectToLocation = location.state?.path || "/";
  
  const userLoginHandler = (event) => {
    event.preventDefault();
    loginService(username, password, redirectToLocation);
  };

  const guestCredentialHandler = (event) => {
    setUserLoginCredential({
      ...userLoginCredential,
      username: "Shaheen amaan",
      password: "Shaheen@143",
    });
    event.preventDefault();
  };

  return (
    <div className="home-main-case" id="center-lohin-page">
      <div className="right-sidebar-container">
        <RightSidebar />
      </div>
      <main className="home-case">
        {/*  */}
        <div className="form-container">
          <form className="login-form" onSubmit={userLoginHandler}>
            <h1 className="form-text">Login</h1>

            <label className="form-lable" htmlFor="username">
              username*
            </label>
            <input
              value={username}
              className="form-inp"
              id="username"
              type="text"
              required
              onChange={(event) =>
                setUserLoginCredential({
                  ...userLoginCredential,
                  username: event.target.value,
                })
              }
            />
            <label className="form-lable" htmlFor="password">
              Password*
            </label>

            <div className="hide-input-case">
              <input
                value={password}
                type={passwordIcon ? "password" : "text"}
                className="hided-input"
                required
                id="password"
                onChange={(event) =>
                  setUserLoginCredential({
                    ...userLoginCredential,
                    password: event.target.value,
                  })
                }
              />
              {passwordIcon ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  onClick={() => setPasswordIcon(!passwordIcon)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={() => setPasswordIcon(!passwordIcon)}
                />
              )}
            </div>
            <button
              className="login-btns"
              type="submit"
              onClick={guestCredentialHandler}
            >
              Enter Guest credentials
            </button>
            <button className="login-btns" type="submit">
              LogIn
            </button>
            <p className="new-account">
              Not a user yet?
              <Link to="/signup">
                <strong>
                  <u>Create Acoount</u>
                </strong>
              </Link>
            </p>
          </form>
        </div>
        {/*  */}
      </main>
      <div className="left-sidebar-container">
        <LeftSideBar />
      </div>
    </div>
  );
};

// export { LogIn as default };
