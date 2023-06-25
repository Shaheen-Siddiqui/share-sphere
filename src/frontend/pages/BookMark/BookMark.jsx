import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleXmark,
  faEllipsisVertical,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

//internal imports
import "./BookMark.css";
import "../Home/Home.css";
import { useContext } from "react";
import { PostContext } from "../../hook/context/PostContext";
import { useEffect } from "react";
import { SideBars } from "../../components/SideBars/SideBars";
import { Feed } from "../../components/Feed/Feed";

export const BookMark = () => {
  const { obtainAllBookMarks, postState } = useContext(PostContext);

  useEffect(() => {
    obtainAllBookMarks();
  }, []);

  return (
    <center>
      <div className="home-main-case">
        <SideBars />
        <main className="home-case">
          <h1 className="search-icon-case">
            Your Book Marks &nbsp;({postState?.userBookMark?.length})
          </h1>
          {/* --------- */}

          {postState?.userBookMark.map((item) => {
            return <Feed {...item} />;
          })}

          {/* --------- */}
        </main>
      </div>
    </center>
  );
};
export { BookMark as default };
