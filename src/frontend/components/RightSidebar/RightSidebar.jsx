import { useContext } from "react";
import "./RightSidebar.css";
import { AuthRequest } from "../AuthRequest.jsx/AuthRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../hook/context/AuthContext";
import { UserContext } from "../../hook/context/UserContext";
import { useEffect } from "react";
import { FollowUserContext } from "../../hook/context/FollowUserContext";

export const RightSidebar = () => {
  // const { login } = useContext(ProfileContext);
  const { token } = useContext(AuthContext);
  const { userState, obtainAllUserService } = useContext(UserContext);
  const {followActionService}=useContext(FollowUserContext)

  useEffect(() => {
    obtainAllUserService();
  }, []);

  return (
    <>
      {!token ? (
        <AuthRequest />
      ) : (
        <div className="follow-user-case">
          {userState?.allUsers.map((item) => {
            const { imgUrl, username, _id } = item;
            return (
              <div className="follow-user row" key={_id}>
                <img
                  align="center"
                  loading="lazy"
                  src={imgUrl}
                  alt={username}
                />
                <p id="follow-user-id">
                  <p>{username}</p>
                  <p>@{username}</p>
                </p>
                <button className="row" onClick={()=>followActionService(_id)}>
                  <FontAwesomeIcon icon={faPlus} />
                  Follow
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export { RightSidebar as default };
