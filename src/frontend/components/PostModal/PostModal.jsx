import { useContext,  useState } from "react";

import "./PostModal.css";
import "../../pages/Home/Home.css";

import { Emojis } from "./Emojis";
import { PostContext } from "../../hook/context/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";
import { toast } from "react-hot-toast";

export const PostModal = () => {
  const [openEmojiModal, setOpenEmojiModal] = useState(false);

  const { togglePostModal, setTogglePostModal } = useContext(PostContext);
  const {
    dispatchPostCRUD,
    createNewPost,
    postContent,
    postedImages,
    
  } = useContext(PostCRUDContext);

  const userPostHandler = (event) => {
    event.preventDefault();
    createNewPost();
    setTogglePostModal(false);
    toast.success("Post successfully created! ")
  };

  const postImageHandler = (event) => {
    const MultipleImage = Object.values(event.target.files).map((value) =>
      URL.createObjectURL(value)
    );
    dispatchPostCRUD({
      type: "POST_IMAGE",
      payload: MultipleImage,
    });
  };

  const obtainEmojies = (index) => {
    toast.loading("Feature will come soon...")
  };

  console.log(postContent, "");
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
                placeholder="Write your thought here..."
                className="menu-button"
              ></textarea>

              <span onClick={() => setTogglePostModal(false)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </span>
            </div>
            <div className="flex-images">
              {postedImages?.map((image, _id) => {
                return (
                  <div key={_id}>
                    <img src={image} alt="" id="user-image-post" />
                    <br />
                    <button
                      className="remove-selected-img"
                      type="button"
                      onClick={() =>
                        dispatchPostCRUD({
                          type: "DELETE_SELECTED_IMAGE",
                          payload: _id,
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
            <hr />

            {openEmojiModal && (
              <Emojis
                setOpenEmojiModal={setOpenEmojiModal}
                obtainEmojies={obtainEmojies}
              />
            )}

            <footer className="post-footer">
              <div className="image-imogies">
                <label htmlFor="chosen-image">
                  <strong>
                    <ion-icon name="happy-outline"></ion-icon> Photo
                  </strong>
                </label>

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  id="chosen-image"
                  onChange={postImageHandler}
                />

                <button
                  type="button"
                  onClick={() => setOpenEmojiModal(!openEmojiModal)}
                >
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
