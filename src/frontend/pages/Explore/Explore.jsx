import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleXmark,
  faEllipsisVertical,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";
// internal imports
import "./Explore.css";
import "../Home/Home.css";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { WriteNewPost } from "../../components/WriteNewPost/WriteNewPost";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { useState } from "react";

export const Explore = () => {
  const [postEDCToggle, setPostEDCToggle] = useState(false);
  const [msgDCToggale, setMsgDCToggale] = useState(false);

  return (
    <center>
      <div className="home-main-case">
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
        <main className="home-case">
          <div className="sort-btn-case">
            <button>
              <ion-icon name="flame-sharp"></ion-icon> Tranding
            </button>
            <button>
              <ion-icon name="layers-sharp"></ion-icon> Latest
            </button>
          </div>
          <hr className="filter-border" />

          {/* HART CODED DATA */}
          <div className="user-post-main-case">
            <div className="about-user">
              <img
                src="https://www.sunofjapan.com/wp-content/uploads/2023/03/KO098-SG.jpg"
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
                  size="xl"
                  className="ellips-icon"
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
                  src="https://www.sunofjapan.com/wp-content/uploads/2023/03/KO098-SG.jpg"
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
                src="https://www.sunofjapan.com/wp-content/uploads/2023/03/KO098-SG.jpg"
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
                  src="https://www.sunofjapan.com/wp-content/uploads/2023/03/KO098-SG.jpg"
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
                  className="ellips-icon"
                  size="xl"
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
          {/* ----- */}
          <div className="user-post-main-case">
            <div className="about-user">
              <img
                src="https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="user profile"
              />
              <div>
                <h1>Guest User</h1>
                <strong>@guestuser</strong>
                <p>2023</p>
              </div>
              <div className="menu-button  edit-delete-parent">
                <div className="edit-delete-menu menu-position">
                  <button className="menu-button">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <span>Edit</span>
                  </button>

                  <button className="menu-button">
                    <FontAwesomeIcon icon={faTrash} />
                    <span>Delete</span>
                  </button>

                  <button className="menu-button">
                    <FontAwesomeIcon icon={faCircleXmark} />
                    <span>Cancel</span>
                  </button>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
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
                  src="https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
                src="https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
                  src="https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
                <div className="edit-delete-menu menu-position">
                  <button className="menu-button">
                    <FontAwesomeIcon icon={faTrash} />
                    <span>Delete</span>
                  </button>

                  <button className="menu-button">
                    <FontAwesomeIcon icon={faCircleXmark} />

                    <span>Cancel</span>
                  </button>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
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

          {/* --------------- */}
        </main>
        <div className="left-sidebar-container">
          <LeftSideBar />
        </div>
        <WriteNewPost />
      </div>
    </center>
  );
};

export { Explore as default };
