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
import { Feed } from "../../components/Feed/Feed";
import { UserContext } from "../../hook/context/UserContext";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";
import { useEffect } from "react";

export const Home = () => {
  const [postEDCToggle, setPostEDCToggle] = useState(false);
  const [msgDCToggale, setMsgDCToggale] = useState(false);
  const { setTogglePostModal } = useContext(PostContext);
  const { currentUserInfo } = useContext(UserContext);
  const { allPosts,obtainAllPostService } = useContext(PostCRUDContext);

  const isFollowed = (username) =>
    currentUserInfo?.following.find((item) => item.username === username);

  const homePost = allPosts.filter(
    (post) =>
      isFollowed(post.username) || post.username === currentUserInfo.username
  );
  useEffect(()=>{
    obtainAllPostService()
  },[])
  return (
    <center>
      <div className="home-main-case">
        <SideBars />
        <main className="home-case">
          {homePost?.map((item) => {
            return <Feed key={item._id} {...item} />;
          })}
        </main>
      </div>
    </center>
  );
};

export { Home as default };
// test //
