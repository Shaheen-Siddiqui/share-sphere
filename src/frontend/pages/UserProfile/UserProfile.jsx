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
import { PostContext } from "../../hook/context/PostContext";
import { Feed } from "../../components/Feed/Feed";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";

export const UserProfile = () => {
  const { userState, currentUserInfo, editUserProfile } =
    useContext(UserContext);
  const {allPosts}=useContext(PostCRUDContext)
  const { userID } = useParams();

  const [toggle, setToggle] = useState(false);
  const [updateBio, setUpdateBio] = useState(currentUserInfo?.bio);
  const [updateWebsite, setUpdateWebsite] = useState(currentUserInfo?.website);
  const [updateImage] = useState(currentUserInfo?.imgUrl);

  const obtainUserByID = userState.allUsers?.find(
    (item) => item._id === userID
  );
  const allPostOfUser = allPosts.filter(
    (item) => item?.username === obtainUserByID?.username
  );

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
          <Profile
            {...obtainUserByID}
            setToggle={setToggle}
            obtainUserByID={obtainUserByID}
          />
          {
            allPostOfUser.map((item,index)=>{
              return <Feed key={index} {...item}/>
            })
          }
        </main>

        {toggle && (
          <form className="post-modal" onSubmit={userPostHandler}>
            <div className="modal-content">
              <div className="edit-profile-x">
                <h1>Edit Profile</h1>
                <span onClick={() => setToggle(false)}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </span>
              </div>
              <center>
                <img src={updateImage} alt="user" className="update-img" />
              </center>
              <div className="updates">
                <u>
                  <p className="bio-update">update Bio</p>
                </u>
                <textarea
                  value={updateBio}
                  required
                  readOnly={false}
                  className="menu-button"
                  onChange={(event) => setUpdateBio(event.target.value)}
                ></textarea>
                <u>
                  <p>Website</p>
                </u>
                <input
                  value={updateWebsite}
                  onChange={(event) => setUpdateWebsite(event.target.value)}
                  className="menu-button"
                  type="text"
                />
              </div>

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
