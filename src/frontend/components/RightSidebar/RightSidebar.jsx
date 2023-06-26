import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Internal Imports...
import "./RightSidebar.css";
import { AuthRequest } from "../AuthRequest.jsx/AuthRequest";
import { AuthContext } from "../../hook/context/AuthContext";
import { UserContext } from "../../hook/context/UserContext";
import { FollowUserContext } from "../../hook/context/FollowUserContext";

export const RightSidebar = () => {
  const { token } = useContext(AuthContext);
  const {
    userState,
    obtainAllUserService,
    currentUserInfo,
    getParticularUser,
  } = useContext(UserContext);
  const { followActionService, whoIsFollowed } = useContext(FollowUserContext);

  useEffect(() => {
    obtainAllUserService();
  }, []);

  const excludeMe = userState.allUsers.filter(
    (item) => item !== currentUserInfo
  );

  const isFollowed = (_id) =>
    currentUserInfo?.following.find((item) => item._id === _id);

  return (
    <>
      {!token ? (
        <AuthRequest />
      ) : (
        <div className="follow-user-case">
          {excludeMe.map((item) => {
            const { imgUrl, username, _id } = item;
            return (
              <div className="follow-user row" key={_id}>
                <Link to={`/profile/${_id}`}>
                  <img
                    align="center"
                    loading="lazy"
                    src={imgUrl}
                    alt={username}
                    onClick={() => getParticularUser(_id)}
                  />
                </Link>

                <p id="follow-user-id">
                  <p>{username}</p>
                  <p>@{username}</p>
                </p>
                {isFollowed(_id) ? (
                  <button
                    className="row"
                    onClick={() => followActionService(_id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Following...
                  </button>
                ) : (
                  <button
                    className="row"
                    onClick={() => followActionService(_id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Follow
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export { RightSidebar as default };
