import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faHouse,
  faCompass,
  faBookmark,
  faLeaf,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

//internal imports
import "./LeftSideBar.css";
import { useContext } from "react";
import { PostContext } from "../../hook/context/PostContext";
import { UserContext } from "../../hook/context/UserContext";
import { AuthContext } from "../../hook/context/AuthContext";

export const LeftSideBar = () => {
  const { setTogglePostModal } = useContext(PostContext);
  const { currentUserInfo } = useContext(UserContext);
  const {isLoggedIn}=useContext(AuthContext)

  return (
    <div className="left-sidebar-case">
      <nav className="navbar-links">
        {!isLoggedIn ? (
          <Link to="/">
            <div className="side-item">
              <span id="ftr-icon">
                <FontAwesomeIcon icon={faCompass} size="2xl" />
              </span>
              <h2>Explore</h2>{" "}
            </div>
          </Link>
        ) : (
          <>
            <Link to="/home">
              <div className="side-item">
                <span id="ftr-icon">
                  <FontAwesomeIcon icon={faHouse} size="2xl" />
                </span>
                <h2>Home</h2>
              </div>
            </Link>

            <Link to="/">
              <div className="side-item">
                <span id="ftr-icon">
                  <FontAwesomeIcon icon={faCompass} size="2xl" />
                </span>
                <h2>Explore</h2>{" "}
              </div>
            </Link>

            <Link to="/bookmark">
              <div className="side-item">
                <span id="ftr-icon">
                  <FontAwesomeIcon icon={faBookmark} size="2xl" />
                </span>
                <h2>Bookmark</h2>
              </div>
            </Link>

            <Link to={`/profile/${currentUserInfo?._id}`}>
              <div className="side-item">
                <span id="ftr-icon">
                  <FontAwesomeIcon icon={faUserTie} size="2xl" />
                </span>
                <h2>Profile</h2>
              </div>
            </Link>

            <div
              className="side-item new-post-button"
              onClick={() => setTogglePostModal(true)}
            >
              <span id="ftr-icon">
                <FontAwesomeIcon icon={faLeaf} size="2xl" />
              </span>
              <h2>new post</h2>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export { LeftSideBar as default };
