import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

//Internal Imports
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";
import { AuthContext } from "../../hook/context/AuthContext";
import { useContext } from "react";
import { UserContext } from "../../hook/context/UserContext";
import { useState } from "react";

export const Profile = ({
  username,
  imgUrl,
  bio,
  website,
  following,
  followers,
  _id,
  setToggle
}) => {
  useEffect(() => {
    obtainAllPostService();
  }, []);
  const { currentUserInfo, editUserProfile } = useContext(UserContext);
  const { allPosts, obtainAllPostService } = useContext(PostCRUDContext);
  const { logOutRequest } = useContext(AuthContext);

  const allPostOfUser = allPosts.filter(
    (item) => item?.username === currentUserInfo?.username
  ).length;

  const editUserProfileFunction = () => {
    setToggle(true);
  };
  const editOrFollow = currentUserInfo?._id === _id;
  return (
    <div className="guest-user-profile-info-case">
      <div className="user-profile-image">
        <div className="profile-logout-button" onClick={logOutRequest}>
          <FontAwesomeIcon icon={faRightFromBracket} size="xl" />
        </div>
        <img src={imgUrl} alt="guest user" />
      </div>
      <div className="guest-user-profile-info">
        <h1>~{username}~</h1>
        <strong>@{username}</strong>
        {editOrFollow ? (
          <button onClick={editUserProfileFunction} className="menu-button">
            Edit Profile
          </button>
        ) : (
          <button className="menu-button">Follow</button>
        )}
        <u>
          <span>{bio}</span>
        </u>
        <Link>
          <span>
            <ion-icon name="globe-sharp"></ion-icon>&nbsp;&nbsp;&nbsp;
          </span>
          {website}
        </Link>
        <div className="definet-numeral-info">
          <span>
            <div>{following.length}</div>
            <span>Following</span>
          </span>
          <span>
            <div>{allPostOfUser}</div>
            <span>Posts</span>
          </span>
          <span>
            <div>{followers.length}</div>
            <span>Followers</span>
          </span>
        </div>
      </div>
    </div>
  );
};
