import { Link } from "react-router-dom";

//internal imports
import "./LeftSideBar.css";
export const LeftSideBar = () => {
  return (
    <div className="left-sidebar-case">
      <nav className="navbar-links">
        <Link to="/">
          <div className="side-item">
            <ion-icon name="home" size="small" id="ftr-icon"></ion-icon>
            <h2>Home</h2>
          </div>
        </Link>

        <Link to="/explore">
          <div className="side-item">
            <ion-icon name="aperture" size="small" id="ftr-icon"></ion-icon>{" "}
            <h2>Explore</h2>
          </div>
        </Link>

        <Link to="/bookmark">
          <div className="side-item">
            <ion-icon name="bookmark" size="small" id="ftr-icon"></ion-icon>{" "}
            <h2>Bookmark</h2>
          </div>
        </Link>

        <Link to="/profile">
          <div className="side-item">
            <ion-icon
              name="person-circle"
              size="small"
              id="ftr-icon"
            ></ion-icon>
            <h2>Profile</h2>
          </div>
        </Link>

        <div className="side-item">
          <ion-icon size="small" name="leaf-sharp" id="ftr-icon"></ion-icon>
          <h2>new post</h2>
        </div>
      </nav>
    </div>
  );
};

export { LeftSideBar as default };
