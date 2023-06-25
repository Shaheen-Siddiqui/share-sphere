import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleXmark,
  faEllipsisVertical,
  faPenToSquare,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

//internal imports.
import "./Home.css";
import { useState } from "react";
import { useContext } from "react";
import { PostContext } from "../../hook/context/PostContext";
import { SideBars } from "../../components/SideBars/SideBars";

export const Home = () => {
  const [postEDCToggle, setPostEDCToggle] = useState(false);
  const [msgDCToggale, setMsgDCToggale] = useState(false);
  const { setTogglePostModal } = useContext(PostContext);

  return (
    <center>
      <div className="home-main-case">
        <SideBars />
        <main className="home-case">
          <div
            className="search-icon-case"
            onClick={() => setTogglePostModal(true)}
          >
            <FontAwesomeIcon
              id="search-add-icon"
              size="2x"
              icon={faCirclePlus}
            />

            <input
              type="text"
              placeholder="What's happning Shaheen...."
              className="menu-button"
            />
          </div>
          <div className="user-post-main-case">
            <div className="about-user">
              <img
                src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                alt="user profile"
              />
              <div>
                <h1>Guest User</h1>
                <strong>@guestuser</strong>
                <p>2023</p>
              </div>
              <div className="menu-button  edit-delete-parent">
                {postEDCToggle && (
                  <div className="edit-delete-menu menu-position">
                    <button className="menu-button">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <span>Edit</span>
                    </button>

                    <button className="menu-button">
                      <FontAwesomeIcon icon={faTrash} />
                      <span>Delete</span>
                    </button>

                    <button
                      className="menu-button"
                      onClick={() => setPostEDCToggle(false)}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="ellips-icon"
                  size="xl"
                  onClick={() => setPostEDCToggle(true)}
                />
              </div>
            </div>

            <div className="user-post">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                culpa corporis repellat eligendi ad architecto officia sapiente
                libero? Doloribus, dicta.
              </p>
              <center>
                <img
                  src="https://imgv3.fotor.com/images/homepage-feature-card/make-blurry-girl-image-clear-with-Fotor-ai-image-enhancer.png"
                  alt="user posted image"
                  className="posted-main-image"
                />
              </center>
              <div className="like-bookmark-icon">
                <div>
                  <FontAwesomeIcon icon={faHeart} size="xl" />
                  <p>0</p>
                </div>
                <FontAwesomeIcon icon={faBookmark} size="xl" />
              </div>
            </div>
            <div className="post-comment-case">
              <img
                src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                alt="user-image"
              />
              <div className="write-comment-case">
                <input placeholder="Write a comment..." />
                <button>
                  <strong>𝖕𝖔𝖘𝖙✎ </strong>
                </button>
              </div>
            </div>
            {/* my friends comments */}
            <div className="comments-of-followers">
              <div className="commented-user-info">
                <img
                  src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                  alt="user profile"
                />
                <div>
                  <h2>Guest User</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, ut.
                  </p>
                </div>
              </div>

              <div className="menu-button edit-delete-parent">
                {msgDCToggale && (
                  <div className="edit-delete-menu menu-position">
                    <button className="menu-button">
                      <FontAwesomeIcon icon={faTrash} />
                      <span>Delete</span>
                    </button>

                    <button
                      className="menu-button"
                      onClick={() => setMsgDCToggale(false)}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  size="xl"
                  className="ellips-icon"
                  onClick={() => setMsgDCToggale(true)}
                />
              </div>
            </div>

            <div className="comments-of-followers commented-user-info">
              <img
                src="https://i.pinimg.com/136x136/d2/cd/d8/d2cdd8e12bbae0a77db58413a981a431.jpg"
                alt="user profile"
              />
              <div>
                <h2>Another User</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </center>
  );
};

export { Home as default };
// test //
