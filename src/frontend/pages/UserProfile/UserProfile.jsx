//internal imports
import "./UserProfile.css";
import "../../pages/Home/Home.css";
import { WriteNewPost } from "../../components/WriteNewPost/WriteNewPost";
import { useContext } from "react";
import { UserContext } from "../../hook/context/UserContext";
import { Profile } from "../../components/Profile/profile";
import { SideBars } from "../../components/SideBars/SideBars";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
  const { userState } = useContext(UserContext);
  const { userID } = useParams();

  const obtainUserByID = userState.allUsers?.find((item) => item._id == userID);
  return (
    <center>
      <div className="home-main-case">
        <SideBars />

        <main className="home-case">
          <Profile {...obtainUserByID} />;
        </main>

        <WriteNewPost />
      </div>
    </center>
  );
};

export { UserProfile as default };
