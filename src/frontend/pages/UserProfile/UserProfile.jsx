import { Link } from "react-router-dom";

//internal imports
import "./UserProfile.css";
import "../../pages/Home/Home.css";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { WriteNewPost } from "../../components/WriteNewPost/WriteNewPost";

export const UserProfile = () => {
  return (
    <center>
      <div className="home-main-case">
        <div className="right-sidebar-container" id="hide-on-mobile"><RightSidebar /> </div>
        <main className="home-case">
          <div className="guest-user-profile-info-case">
            <div className="user-profile-image">
              <div className="profile-logout-button">
                <ion-icon size="large" name="log-out"></ion-icon>
              </div>
              <img
                src="https://w0.peakpx.com/wallpaper/275/208/HD-wallpaper-margarita-lying-in-bed-margarita-girls-model.jpg"
                alt="guest user"
              />
            </div>
            <div className="guest-user-profile-info">
              <h1>~Guest User~</h1>
              <strong>@Guestuser</strong>
              <button className="menu-button">Edit Profile</button>
              <u>
                <span>
                  An frontend developer learning skills sets from neoG
                </span>
              </u>
              <Link>
                <span>
                  <ion-icon name="globe-sharp"></ion-icon>&nbsp;&nbsp;&nbsp;
                </span>
                https://the-decor-supermarket.netlify.app/
              </Link>
              <div className="definet-numeral-info">
                <span>
                  <div>0</div>
                  <span>Following</span>
                </span>
                <span>
                  <div>0</div>
                  <span>Posts</span>
                </span>
                <span>
                  <div>0</div>
                  <span>Followers</span>
                </span>
              </div>
            </div>
          </div>
          {/*  DUMMY DATA*/}
          <div className="user-post-main-case">
            <div className="about-user">
              <img
                src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                alt="user profile"
              />
              <div>
                <h1>Guest User</h1>
                <strong>@guestuser</strong>
                <p>2023</p>
              </div>
              <button className="menu-button  edit-delete-parent">
                <div className="edit-delete-menu menu-position">
                  <button className="menu-button">
                    <ion-icon size="small" name="create"></ion-icon>
                    <span>Edit</span>
                  </button>

                  <button className="menu-button">
                    <ion-icon size="small" name="trash"></ion-icon>
                    <span>Delete</span>
                  </button>

                  <button className="menu-button">
                    <ion-icon size="small" name="close-circle"></ion-icon>{" "}
                    <span>Cancel</span>
                  </button>
                </div>
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
              <center>
                <img
                  src="https://imgv3.fotor.com/images/homepage-feature-card/make-blurry-girl-image-clear-with-Fotor-ai-image-enhancer.png"
                  alt="user posted image"
                  className="posted-main-image"
                />
              </center>
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
            {/* my friends comments */}
            <div className="comments-of-followers">
              <div className="commented-user-info">
                <img
                  src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                  alt="user profile"
                />
                <div>
                  <h2>Guest User</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, ut.
                  </p>
                </div>
              </div>

              <button className="menu-button edit-delete-parent">
                <div className="edit-delete-menu menu-position">
                  <button className="menu-button">
                    <ion-icon size="small" name="trash"></ion-icon>
                    <span>Delete</span>
                  </button>

                  <button className="menu-button">
                    <ion-icon size="small" name="close-circle"></ion-icon>
                    <span>Cancel</span>
                  </button>
                </div>
                <ion-icon
                  size="small"
                  name="ellipsis-vertical-sharp"
                ></ion-icon>
              </button>
            </div>

            <div className="comments-of-followers commented-user-info">
              <img
                src="https://i.pinimg.com/136x136/d2/cd/d8/d2cdd8e12bbae0a77db58413a981a431.jpg"
                alt="user profile"
              />
              <div>
                <h2>Another User</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>

          {/* ---------- */}
        </main>
        <div className="left-sidebar-container">
          <LeftSideBar />
        </div>
        <WriteNewPost/>
        
      </div>
    </center>
  );
};

export { UserProfile as default };
