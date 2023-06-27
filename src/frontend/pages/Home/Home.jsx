
//internal imports.
import "./Home.css";
import { useContext } from "react";
import { SideBars } from "../../components/SideBars/SideBars";
import { Feed } from "../../components/Feed/Feed";
import { UserContext } from "../../hook/context/UserContext";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";
import { useEffect } from "react";

export const Home = () => {
console.log("home");
  
  const { currentUserInfo } = useContext(UserContext);
  const { allPosts,obtainAllPostService } = useContext(PostCRUDContext);

  const isFollowed = (username) =>
    currentUserInfo?.following.find((item) => item?.username === username);

  const homePost = allPosts.filter(
    (post) =>
      isFollowed(post?.username) || post?.username === currentUserInfo?.username
  );
  useEffect(()=>{
    obtainAllPostService()
    //eslint-disable-next-line
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
