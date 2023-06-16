import "./BookMark.css";
import "../Home/Home.css";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
export const BookMark = () => {
  return (
    <center>
      <div className="home-main-case">
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
        <main className="home-case">
          <div className="search-icon-case">
            <ion-icon
              size="large"
              name="add-circle-sharp"
              id="search-add-icon"
            ></ion-icon>
            <input
              type="text"
              placeholder="What's happning Shaheen...."
              className="menu-button"
            />
          </div>

          <div className="user-post-main-case">
            <div className="about-user">
              <img
                src="https://iso.500px.com/wp-content/uploads/2020/06/Cheerful-small-girl-running-in-the-backyard-garden-having-fun.-By-Jozef-Polc.jpeg"
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
                  src="https://iso.500px.com/wp-content/uploads/2020/06/Cheerful-small-girl-running-in-the-backyard-garden-having-fun.-By-Jozef-Polc.jpeg"
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
                src="https://iso.500px.com/wp-content/uploads/2020/06/Cheerful-small-girl-running-in-the-backyard-garden-having-fun.-By-Jozef-Polc.jpeg"
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
                  src="https://iso.500px.com/wp-content/uploads/2020/06/Cheerful-small-girl-running-in-the-backyard-garden-having-fun.-By-Jozef-Polc.jpeg"
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
        </main>
        <div className="left-sidebar-container">
          <LeftSideBar />
        </div>
      </div>
    </center>
  );
};
export { BookMark as default };
