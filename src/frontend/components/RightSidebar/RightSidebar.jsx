import { useContext } from "react";
import "./RightSidebar.css";
import { ProfileContext } from "../../hook/context/ProfileContext";
import { AuthRequest } from "../AuthRequest.jsx/AuthRequest";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../../hook/context/AuthContext";

export const RightSidebar = () => {
  // const { login } = useContext(ProfileContext);
  const {token}=useContext(AuthContext)
  return (
    <>
      {!token ? (
        <AuthRequest />
      ) : (
        <div className="follow-user-case">
          <div className="follow-user row">
            <img
              align="center"
              loading="lazy"
              src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
              alt=""
            />
            <p>
              <p>John kids</p>
              <p>@Johnkidd</p>
            </p>
            <button className="row">
              <FontAwesomeIcon icon={faPlus} />
              Follow
            </button>
          </div>
          <div className="follow-user row">
            <img
              width="40rem"
              height="40rem"
              align="center"
              loading="lazy"
              src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
              alt=""
            />
            <p>
              <p>John kids</p>
              <p>@Johnkidd</p>
            </p>
            <button className="row">
              <FontAwesomeIcon icon={faPlus} />
              Follow
            </button>
          </div>
          <div className="follow-user row">
            <img
              width="40rem"
              height="40rem"
              align="center"
              loading="lazy"
              src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
              alt=""
            />
            <p>
              <p>John kids</p>
              <p>@Johnkidd</p>
            </p>
            <button className="row">
              <FontAwesomeIcon icon={faPlus} />
              Follow
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { RightSidebar as default };
