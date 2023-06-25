import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
export const SideBars = () => {
  return (
    <>
      <div className="right-sidebar-container" id="hide-on-mobile">
        <RightSidebar />
      </div>
      <div className="left-sidebar-container">
        <LeftSideBar />
      </div>
    </>
  );
};
