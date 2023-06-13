//internal imports.

import "./Home.css";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";

export const Home = () => {
  return (

    <center >
      <div className="home-main-case">
        <RightSidebar />
        <main className="home-case">
          <div className="search-icon-case">
            <ion-icon
              size="small"
              name="add-circle-sharp"
              id="search-add-icon"
            ></ion-icon>
            <input
              type="text"
              placeholder="Write something intrasting..."
              size="51"
            />
          </div>
        </main>
        <LeftSideBar />
      </div>
    </center>
  );
};

export { Home as default };
