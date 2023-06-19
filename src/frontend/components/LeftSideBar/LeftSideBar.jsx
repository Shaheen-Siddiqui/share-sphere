import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faCompass,faBookmark,faLeaf,faUserTie } from "@fortawesome/free-solid-svg-icons";

//internal imports
import "./LeftSideBar.css";
export const LeftSideBar = () => {
  return (
    <div className="left-sidebar-case">
      <nav className="navbar-links">
        <Link to="/">
          <div className="side-item">
            <span id="ftr-icon">
            <FontAwesomeIcon icon={faHouse} size="2xl" />
            </span>
            <h2>Home</h2>
          </div>
        </Link>

        <Link to="/explore">
          <div className="side-item">
            <span id="ftr-icon">

          <FontAwesomeIcon icon={faCompass}  size="2xl"/>
            </span>
            <h2>Explore</h2>          </div>
        </Link>

        <Link to="/bookmark">
          <div className="side-item">
            <span id="ftr-icon">

            <FontAwesomeIcon icon={faBookmark}  size="2xl"/>
            </span>
            <h2>Bookmark</h2>
          </div>
        </Link>

        <Link to="/profile">
          <div className="side-item">
           <span id="ftr-icon">

         <FontAwesomeIcon icon={faUserTie} size="2xl" />
           </span>
            <h2>Profile</h2>
          </div>
        </Link>

        <div className="side-item new-post-button">
          <span id="ftr-icon">
          <FontAwesomeIcon icon={faLeaf}  size="2xl" />
          </span>
          <h2>new post</h2>
        </div>
      </nav>
    </div>
  );
};

export { LeftSideBar as default };
