import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faUserTie,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

//internal imports
import "./Footer.css";
import { useContext } from "react";
import { AuthContext } from "../../hook/context/AuthContext";
export const MobileFooter = () => {
  const {logOutRequest}=useContext(AuthContext)
  return (
    <footer className="footer-case">
      <Link title="Home" to="/home">
        <span id="ftr-icon">
          <FontAwesomeIcon icon={faHouse} size="2xl" />
        </span>
      </Link>
      <Link title="Explore" to="/">
        <span id="ftr-icon">
          <FontAwesomeIcon icon={faCompass} size="2xl" />
        </span>
      </Link>
      <Link title="BookMarks" to="/bookmark">
        <span id="ftr-icon">
          <FontAwesomeIcon icon={faBookmark} size="2xl" />
        </span>
      </Link>

      <Link title="user profile" to="/profile">
        <span id="ftr-icon">
          <FontAwesomeIcon icon={faUserTie} size="2xl" />
        </span>
      </Link>

      <Link title="logout">
      <span id="ftr-icon" onClick={logOutRequest}>
          <FontAwesomeIcon icon={faRightFromBracket} size="2xl" />
        </span>
      </Link>

      {/* <Link title="logout">
      <FontAwesomeIcon icon={faRightToBracket} />
      </Link> */}
    </footer>
  );
};
export { MobileFooter as default };
