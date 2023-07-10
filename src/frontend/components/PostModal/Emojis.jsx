import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./PostModal.css";
import { useContext } from "react";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";

export const Emojis = ({ setOpenEmojiModal, obtainEmojies }) => {
  const { funImoji } = useContext(PostCRUDContext);
  return (
    <div className="post-modal">
      <div className="modal-content" id="avatar-modal-content">
        <div className="post-message" style={{ backgroundColor: "red" }}>
          <span onClick={() => setOpenEmojiModal(false)}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
        </div>
        <div className="avatar-case">
          {funImoji.map((emoji, index) => {
            return (
              <strong
                key={index}
                onClick={() => obtainEmojies(index)}
                className="emoji-case"
              >
                {emoji}
              </strong>
            );
          })}
        </div>
      </div>
    </div>
  );
};
