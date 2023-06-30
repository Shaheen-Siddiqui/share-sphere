import { useContext } from "react";
import { PostContext } from "../../hook/context/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { userAvatars } from "../../../backend/db/avatar";

export const ProfileAvatar = ({ setAvatarCase, setUpdateImageUrl }) => {
  return (
    <div className="post-modal" onClick={() => setAvatarCase(false)}>
      <div className="modal-content" id="avatar-modal-content">
        <div className="post-message" style={{ backgroundColor: "red" }}>
          <span onClick={() => setAvatarCase(false)}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
        </div>
        <div className="avatar-case">
          {userAvatars.map((avatar, index) => {
            return (
              <img
                className="avatar-img"
                src={avatar}
                alt={index}
                key={index}
                onClick={() => setUpdateImageUrl(avatar)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
