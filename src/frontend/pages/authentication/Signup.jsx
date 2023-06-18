import { useState } from "react";
import { Link } from "react-router-dom";

// internal imports
import "./authentication.css";
import "../Home/Home.css"
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";

export const SignUp = () => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [confirmPasswordIcon, seConfirmPasswordIcon] = useState(false);

  const [userInformation, setUserInformation] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const { fullName, email, password, confirmPassword } = userInformation;

  const isPasswordMatch = () => {
    if (password !== confirmPassword) {
      alert("password does not match");
    } else {
      return true;
    }
  };
  const userSignedUpHandler = (event) => {};

  return (
    <>
      <div className="home-main-case" id="center-lohin-page">
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
        <main className="home-case">
          {/*  */}
          <div className="form-container">
            <form
              className="login-form signup-form"
              onSubmit={userSignedUpHandler}
            >
              <h1 className="form-text">Sign Up</h1>

              <label className="form-lable" htmlFor="fullname">
                Full Name
              </label>
              <input
                value={fullName}
                autoComplete="off"
                required
                type="text"
                id="fullname"
                name="fullName"
                className="form-inp"
                placeholder="Enter your full Name"
                onChange={(event) =>
                  setUserInformation({
                    ...userInformation,
                    fullName: event.target.value,
                  })
                }
              />

              <label className="form-lable" htmlFor="email">
                Email Address*
              </label>
              <input
                value={email}
                className="form-inp"
                type="email"
                id="email"
                required
                name="email"
                placeholder="admin@gmail.com"
                onChange={(event) =>
                  setUserInformation({
                    ...userInformation,
                    email: event.target.value,
                  })
                }
              />

              <label className="form-lable" htmlFor="password">
                Password*
              </label>
              <div className="hide-input-case">
                <input
                  className="hided-input"
                  value={password}
                  type={passwordIcon ? "password" : "text"}
                  id="password"
                  autoComplete="off"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(event) =>
                    setUserInformation({
                      ...userInformation,
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

              <label className="form-lable" htmlFor="confirm-password">
                Confirm password
              </label>

              <div className="hide-input-case">
                <input
                  className="hided-input"
                  value={confirmPassword}
                  autoComplete="off"
                  type={confirmPasswordIcon ? "password" : "text"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  onChange={(event) =>
                    setUserInformation({
                      ...userInformation,
                      confirmPassword: event.target.value,
                    })
                  }
                />
                {confirmPasswordIcon ? (
                  <ion-icon
                    size="small"
                    name="eye-off"
                    className="eye-icon"
                    onClick={() => seConfirmPasswordIcon(!confirmPasswordIcon)}
                  ></ion-icon>
                ) : (
                  <ion-icon
                    size="small"
                    name="eye"
                    className="eye-icon"
                    onClick={() => seConfirmPasswordIcon(!confirmPasswordIcon)}
                  ></ion-icon>
                )}
              </div>

              <button type="submit" className="login-btns">
                Register
              </button>

              <p className="new-account">
                Already have account?
                <Link to="/login">
                  <strong>
                    <u>Login Here</u>
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
    </>
  );
};

export { SignUp as default };
