import { useContext } from "react";
import "./Header.css";
import { AuthContext } from "../../hook/context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const MobileHeader = () => {
  const { isLoggedIn,logOutRequest } = useContext(AuthContext);

  return (
    <header className="header-case">
      <h1>share sphere</h1>
      {
        isLoggedIn &&
      <div className="profile-logout-button" id="header-logout" onClick={logOutRequest}>
        <FontAwesomeIcon icon={faRightFromBracket} size="2xl" />
      </div>
      }
    </header>
  );
};

export { MobileHeader as default };
