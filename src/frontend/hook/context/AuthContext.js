import { createContext, useReducer } from "react";
import { authReducer } from "../reducer/AuthReducer";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [{ user, token }, dispatchAuthState] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  });

  const navigate = useNavigate();

  const SignUpService = async (
    username,
    password,
    email,
    isPasswordMatch,
    redirectToLocation
  ) => {
    if (isPasswordMatch()) {
      try {
        const response = await axios.post("/api/auth/signup", {
          username,
          password,
          email,
          imgUrl: "https://ems.vsign.in/assets/images/brand/user.png",
        });

        if (response.status === 201) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );
          localStorage.setItem("token", response.data.encodedToken);

          toast.success("Signed up!!");
          dispatchAuthState({
            type: "USER_LOGGED_IN",
            payload: {
              user: response.data.createdUser,
              token: response.data.encodedToken,
            },
          });
          setIsLoggedIn(true);
          navigate(redirectToLocation, "/");
        }
      } catch (error) {
        console.log(error);
        const {
          response: { status },
        } = error;
        if (status === 422) {
          toast.error(" username already exists! ");
        } else {
          toast.error("unable to Signup!");
        }
      }
    }
  };

  const loginService = async (username, password, redirectToLocation) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        localStorage.setItem("token", response.data.encodedToken);

        dispatchAuthState({
          type: "USER_LOGGED_IN",
          payload: {
            user: response.data.foundUser,
            token: response.data.encodedToken,
          },
        });

        setIsLoggedIn(true);
        toast.success("Logged in successfully!");
        navigate(redirectToLocation, { replace: true });
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        toast.error("The username you entered is not Registered");
      } else if (error.response.status === 401) {
        toast.error("The credentials you entered are invalid");
      } else {
        toast.error("unable to login!");
      }
    }
  };

  const logOutRequest = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatchAuthState({ type: "USER_LOGGED_OUT" });
    navigate("/login");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        SignUpService,
        loginService,
        logOutRequest,
        user,
        token,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// {
// "email":"admin@gmail.com",
// "password":"12345"
// }
