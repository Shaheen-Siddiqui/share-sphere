import { Link } from "react-router-dom";

//internal imports
import "./Explore.css";
import { RightSidebar } from "../../components/RightSidebar/RightSidebar";
import { WriteNewPost } from "../../components/WriteNewPost/WriteNewPost";
export const Explore = () => {
  return (
    <div>
      <RightSidebar />
      <div className="sort-btn-case">
        <button>
          <ion-icon name="flame-sharp"></ion-icon> Tranding
        </button>
        |
        <button>
          <ion-icon name="layers-sharp"></ion-icon> Latest
        </button>
      </div>

      <hr className="filter-border" />
      {/* <WriteNewPost /> */}
    </div>
  );
};

export { Explore as default };
