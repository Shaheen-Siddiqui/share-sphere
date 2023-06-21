import { useContext } from "react";
import "./PostModal.css";
import { PostContext } from "../../hook/context/PostContext";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PostModal = () => {
  const { togglePostModal, setTogglePostModal } = useContext(PostContext);
  return (
    <>
      {togglePostModal && (
        <div class="post-modal">
          {/* <!-- Modal content --> */}
          <div class="modal-content">
            <div className="post-message">
              <img
                height="30"
                width="35"
                src="https://www.eventstodayz.com/wp-content/uploads/2017/10/cute-little-girls-hd-image.jpg"
                alt="user"
              />
              <textarea
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
              <button>
                <ion-icon name="caret-up-circle-outline"></ion-icon> POST
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};
export { PostModal as default };
