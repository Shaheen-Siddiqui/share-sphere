import { useContext } from "react";
import "./PostModal.css";
import { PostContext } from "../../hook/context/PostContext";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";

export const PostModal = () => {
  const { togglePostModal, setTogglePostModal } = useContext(PostContext);

  const { dispatchPostCRUD, createNewPost, postContent } =
    useContext(PostCRUDContext);

  const userPostHandler = (event) => {
    event.preventDefault();
    createNewPost();
    setTogglePostModal(false);
  };
  return (
    <>
      {togglePostModal && (
        <form className="post-modal" onSubmit={userPostHandler}>
          {/* <!-- Modal content --> */}
          <div className="modal-content">
            <div className="post-message">
              <img
                height="30"
                width="35"
                src="https://www.eventstodayz.com/wp-content/uploads/2017/10/cute-little-girls-hd-image.jpg"
                alt="user"
              />
              <textarea
                required
                readOnly={false}
                value={postContent}
                onChange={(event) =>
                  dispatchPostCRUD({
                    type: "POST_CONTENT",
                    payload: event.target.value,
                  })
                }
                placeholder="Write your thought..."
                className="menu-button"
              ></textarea>

              <span onClick={() => setTogglePostModal(false)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </span>
            </div>
            <hr />

            <footer className="post-footer">
              <div className="image-imogies">
                <button>
                  <ion-icon name="image"></ion-icon> Photo/GIF
                </button>
                <button>
                  <ion-icon name="happy-outline"></ion-icon> Emojis
                </button>
              </div>
              <button type="submit">
                <ion-icon name="caret-up-circle-outline"></ion-icon> POST
              </button>
            </footer>
          </div>
        </form>
      )}
    </>
  );
};
export { PostModal as default };
