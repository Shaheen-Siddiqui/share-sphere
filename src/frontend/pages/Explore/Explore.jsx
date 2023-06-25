import { useContext } from "react";

// internal imports
import "./Explore.css";
import "../Home/Home.css";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { WriteNewPost } from "../../components/WriteNewPost/WriteNewPost";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { PostContext } from "../../hook/context/PostContext";
import { useEffect } from "react";
import { PostCRUDContext } from "../../hook/context/PostCRUDContext";
import { Feed } from "../../components/Feed/Feed";

export const Explore = () => {
  const { filterTrands, filterLatest } = useContext(PostContext);
  const { allPosts, obtainAllPostService } = useContext(PostCRUDContext);

  useEffect(() => {
    obtainAllPostService();
  }, []);

  return (
    <center>
      <div className="home-main-case">
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
        <main className="home-case">
          <div className="sort-btn-case">
            <button onClick={obtainAllPostService}>
              All posts ({`${allPosts.length}`})
            </button>
            <button onClick={filterTrands}>
              <ion-icon name="flame-sharp"></ion-icon> Trending
            </button>
            <button onClick={filterLatest}>
              <ion-icon name="layers-sharp"></ion-icon> Latest
            </button>
          </div>
          <hr className="filter-border" />

          {allPosts?.map((item) => {
            return <Feed key={item._id} {...item} />;
          })}
          
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
