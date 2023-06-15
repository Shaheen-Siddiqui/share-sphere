//internal imports.

import "./Home.css";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";

export const Home = () => {
  return (
    <center>
      <div className="home-main-case">
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
        <main className="home-case">
          <div className="search-icon-case">
            <ion-icon
              size="small"
              name="add-circle-sharp"
              id="search-add-icon"
            ></ion-icon>
            <input type="text" placeholder="Write something intrasting..." />
          </div>
          
          {/* <div className="user-post-main-case">
            <div className="about-user">
              <img
                height="40"
                width="auto"
                src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                alt="user profile pic"
              />
              <div>
                <h1>Guest User</h1>
                <strong>@guestuser</strong>
                <p>2023</p>
              </div>
              <button>
                <ion-icon
                  size="small"
                  name="ellipsis-vertical-sharp"
                ></ion-icon>
              </button>
            </div>

            <div className="user-post">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                culpa corporis repellat eligendi ad architecto officia sapiente
                libero? Doloribus, dicta.
              </p>
              <img
                src="https://imgv3.fotor.com/images/homepage-feature-card/make-blurry-girl-image-clear-with-Fotor-ai-image-enhancer.png"
                alt="user posted image"
                className="posted-main-image"
              />
              <div className="like-bookmark-icon">
                <div>
                  <ion-icon size="small" name="heart-outline"></ion-icon>
                  <p>0</p>
                </div>
                <ion-icon size="small" name="bookmark-outline"></ion-icon>
              </div>
            </div>
            <div className="post-comment-case">
              <img
                height="30"
                width="29rem"
                src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                alt="user-image"
              />
              <div className="write-comment-case">
                <input placeholder="Write a comment..." />
                <button>
                  <strong>𝖕𝖔𝖘𝖙✎ </strong>
                </button>
              </div>
            </div>

            <div className="about-user">
              <img
                height="30"
                width="29rem"
                src="https://static.toiimg.com/photo/6444014.cms?imgsize=25045"
                alt="user profile pic"
              />
              <div>
                <h1>Guest User</h1>
              </div>
            </div>
            
          </div> */}
        </main>
        <div className="left-sidebar-container">
          <LeftSideBar />
        </div>
      </div>
    </center>
  );
};

export { Home as default };
