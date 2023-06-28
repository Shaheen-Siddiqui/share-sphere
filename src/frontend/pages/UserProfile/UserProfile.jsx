//internal imports
import "../../pages/Home/Home.css";
import { WriteNewPost } from "../../components/WriteNewPost/WriteNewPost";
import { useContext, useState } from "react";
import { UserContext } from "../../hook/context/UserContext";
import { Profile } from "../../components/Profile/profile";
import { SideBars } from "../../components/SideBars/SideBars";
import { useParams } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../UserProfile/UserProfile.css";

export const UserProfile = () => {
  const { userState, currentUserInfo, editUserProfile } =
    useContext(UserContext);
  const { userID } = useParams();
  // const { bio, website, imgUrl } = currentUserInfo;

  const [toggle, setToggle] = useState(false);
  // const [_, setopenImageModal] = useState(false);
  const [updateBio, setUpdateBio] = useState(currentUserInfo?.bio);
  const [updateWebsite, setUpdateWebsite] = useState(currentUserInfo?.website);
  const [updateImage] = useState(currentUserInfo?.imgUrl);

  const obtainUserByID = userState.allUsers?.find((item) => item._id === userID);

  const userPostHandler = (event) => {
    event.preventDefault();
    setToggle(false);
    editUserProfile({
      ...obtainUserByID,
      bio: updateBio,
      website: updateWebsite,
      imgUrl: updateImage,
    });
  };

  return (
    <center>
      <div className="home-main-case">
        <SideBars />

        <main className="home-case">
          <Profile {...obtainUserByID} setToggle={setToggle} obtainUserByID={obtainUserByID} />;
        </main>
        {toggle && (
          <form className="post-modal" onSubmit={userPostHandler}>
            <div className="modal-content">
              <div className="post-message">
                <h1>Edit Profile</h1>

                <textarea
                  value={updateBio}
                  required
                  readOnly={false}
                  className="menu-button"
                  id="bio-case"
                  onChange={(event) => setUpdateBio(event.target.value)}
                ></textarea>

                <span>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </span>
              </div>
              <div>
                <p>website</p>
                <input
                  type="text"
                  value={updateWebsite}
                  onChange={(event) => setUpdateWebsite(event.target.value)}
                />
              </div>
              <div>
                <img height="50" width="50" src={updateImage} alt="alt neo" />
                <input type="file" placeholder="choose an image" />
              </div>
              <hr />

              <footer className="post-footer">
                <button type="submit">
                  <ion-icon name="caret-up-circle-outline"></ion-icon> POST
                </button>
              </footer>
            </div>
          </form>
        )}

        <WriteNewPost />
      </div>
    </center>
  );
};

export { UserProfile as default };
