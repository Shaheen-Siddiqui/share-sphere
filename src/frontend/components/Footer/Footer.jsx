import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faLeaf,
  faUserTie,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

//internal imports
import "./Footer.css";
export const MobileFooter = () => {
  return (
    <footer className="footer-case">
      <Link title="Home" to="/">
        <span id="ftr-icon">
          <FontAwesomeIcon icon={faHouse} size="2xl" />
        </span>
      </Link>
      <Link title="Explore" to="/explore">
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
      <span id="ftr-icon">
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
