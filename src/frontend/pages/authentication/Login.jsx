import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import "./authentication.css";
import "../Home/Home.css";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";

export const LogIn = () => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [userLoginCredential, setUserLoginCredential] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userLoginCredential;

  const userLoginHandler = (event) => {};

  const guestCredentialHandler = (event) => {
    setUserLoginCredential({
      ...userLoginCredential,
      email: "Shaheen_amaan@gmail.com",
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

            <label className="form-lable" htmlFor="email">
              Email Address*
            </label>
            <input
              value={email}
              className="form-inp"
              id="email"
              type="text"
              required
              onChange={(event) =>
                setUserLoginCredential({
                  ...userLoginCredential,
                  email: event.target.value,
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
                <ion-icon
                size="small"
                  name="eye-off"
                  className="eye-icon"
                  onClick={() => setPasswordIcon(!passwordIcon)}
                ></ion-icon>
              ) : (
                <ion-icon
                size="small"
                  name="eye"
                  className="eye-icon"
                  onClick={() => setPasswordIcon(!passwordIcon)}
                ></ion-icon>
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

export { LogIn as default };
