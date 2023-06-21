import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

// internal imports
import "../Home/Home.css";
import "./authentication.css";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { AuthContext } from "../../hook/context/AuthContext";

export const SignUp = () => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [confirmPasswordIcon, seConfirmPasswordIcon] = useState(false);
  const { SignUpService } = useContext(AuthContext);
  const location = useLocation();
  const redirectToLocation = location.state?.path || "/";

  const [userInformation, setUserInformation] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = userInformation;

  const isPasswordMatch = () => {
    if (password !== confirmPassword) {
      toast.error("password doest not matched");
    } else {
      return true;
    }
  };
  const userSignedUpHandler = (event) => {
    event.preventDefault();
    SignUpService(
      username,
      password,
      email,
      isPasswordMatch,
      redirectToLocation
    );
  };
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
                value={username}
                autoComplete="off"
                required
                type="text"
                id="fullname"
                name="username"
                className="form-inp"
                placeholder="Enter your full Name"
                onChange={(event) =>
                  setUserInformation({
                    ...userInformation,
                    username: event.target.value,
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
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={() => seConfirmPasswordIcon(!confirmPasswordIcon)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={() => seConfirmPasswordIcon(!confirmPasswordIcon)}
                  />
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
