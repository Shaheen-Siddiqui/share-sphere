import { useContext, useState } from "react";
import "./PostModal.css";
import { PostContext } from "../../hook/context/PostContext";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";
import { useEffect } from "react";

export const EditModal = () => {
  const { toggleEditModal, setToggleEditModal, postEdit, previousPost } =
    useContext(PostContext);

  const { editPostService } = useContext(PostCRUDContext);

  const [text, setText] = useState("");
  const userPostHandler = (event) => {
    event.preventDefault();
    editPostService(postEdit, text);
    setToggleEditModal(false);
  };

  useEffect(() => {
    setText(previousPost);
    //eslint-disable-next-line
  }, [toggleEditModal, previousPost]);

  return (
    <>
      {toggleEditModal && (
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
                readOnly={false}
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Write your thought..."
                className="menu-button"
              ></textarea>

              <span onClick={() => setToggleEditModal(false)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </span>
            </div>
            <hr />

            <footer className="post-footer">
              {/* <div className="image-imogies">
                <button>
                  <ion-icon name="image"></ion-icon> Photo/GIF
                </button>
                <button>
                  <ion-icon name="happy-outline"></ion-icon> Emojis
                </button>
              </div> */}
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
export { EditModal as default };
