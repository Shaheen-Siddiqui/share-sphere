import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleXmark,
  faEllipsisVertical,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

//internal imports
import "./BookMark.css";
import "../Home/Home.css";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { WriteNewPost } from "../../components/WriteNewPost/WriteNewPost";
import { useContext } from "react";
import { PostContext } from "../../hook/context/PostContext";
import { useEffect } from "react";
import { AuthContext } from "../../hook/context/AuthContext";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";

export const BookMark = () => {
  const { user } = useContext(AuthContext);
  const {
    obtainAllBookMarks,
    deleteBookMarkedPost,
    userBookMark,
    likePost,
    obtainAllPostService,
  } = useContext(PostContext);

  const { postEDCToggle, msgDCToggale, ShowPostEDCCase, ShowMsgDCCase } =
    useContext(PostCRUDContext);

  useEffect(() => {
    obtainAllBookMarks();
  }, []);

  return (
    <center>
      <div className="home-main-case">
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
        <main className="home-case">
          <h1 className="search-icon-case">
            Your Book Marks &nbsp;({userBookMark.length})
          </h1>
          {/* --------- */}

          {userBookMark.map((item) => {
            const {
              _id,
              content,
              postedImages,
              imgUrl,
              // likes: { likeCount },
              username,
              createdAt,
            } = item;
            return (
              <div className="user-post-main-case" key={_id}>
                <div className="about-user">
                  <img src={imgUrl} alt={username} />
                  <div>
                    <h1>{username}</h1>
                    <strong>@{username}</strong>
                    <p>{createdAt}</p>
                  </div>
                  <div className="menu-button  edit-delete-parent">
                    {username === user.username && (
                      <>
                        {postEDCToggle[_id] && (
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
                              onClick={() => ShowPostEDCCase(_id)}
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
                          onClick={() => ShowPostEDCCase(_id)}
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className="user-post">
                  <p>{content}</p>
                  <center>
                    <img
                      src={postedImages === null ? "" : postedImages}
                      alt={postedImages === null ? "" : "user posted pamp"}
                      className="posted-main-image"
                    />
                  </center>
                  <div className="like-bookmark-icon">
                    <div onClick={() => likePost(_id)}>
                      {/* <FontAwesomeIcon icon={faHeart} size="xl" />
                      <p>{likeCount}</p> */}
                    </div>
                    <div onClick={() => deleteBookMarkedPost(_id)}>
                      <FontAwesomeIcon
                        className="pointer"
                        icon={faBookmark}
                        size="xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="post-comment-case">
                  <img src={imgUrl} alt="user-image" />
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
                    <img src={imgUrl} alt="user profile" />
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
                    {msgDCToggale[_id] && (
                      <div className="edit-delete-menu menu-position">
                        <button className="menu-button">
                          <FontAwesomeIcon icon={faTrash} />
                          <span>Delete</span>
                        </button>

                        <button
                          className="menu-button"
                          onClick={() => ShowMsgDCCase(_id)}
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
                      onClick={() => ShowMsgDCCase(_id)}
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* --------- */}
        </main>
        <div className="left-sidebar-container">
          <LeftSideBar />
        </div>
      </div>
    </center>
  );
};
export { BookMark as default };
