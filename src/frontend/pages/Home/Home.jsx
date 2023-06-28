//internal imports.
import "./Home.css";
import { useContext } from "react";
import { SideBars } from "../../components/SideBars/SideBars";
import { Feed } from "../../components/Feed/Feed";
import { UserContext } from "../../hook/context/UserContext";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { PostContext } from "../../hook/context/PostContext";

export const Home = () => {
  const { currentUserInfo } = useContext(UserContext);
  const { allPosts, obtainAllPostService } = useContext(PostCRUDContext);
  const { setTogglePostModal } = useContext(PostContext);

  const isFollowed = (username) =>
    currentUserInfo?.following.find((item) => item?.username === username);

  const homePost = allPosts.filter(
    (post) =>
      isFollowed(post?.username) || post?.username === currentUserInfo?.username
  );
  useEffect(() => {
    obtainAllPostService();
    //eslint-disable-next-line
  }, []);

  return (
    <center>
      <div className="home-main-case">
        <SideBars />
        <main className="home-case">
          <div
            className="search-icon-case"
            onClick={() => setTogglePostModal(true)}
          >
            <FontAwesomeIcon icon={faPenNib} size="2xl" id="search-add-icon" />
            <input
              type="text"
              placeholder="Write something intrasting..."
              className="menu-button"
            />
          </div>
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
