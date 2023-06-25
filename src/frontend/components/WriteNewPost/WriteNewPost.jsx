import { useContext } from "react";
import "./WriteNewPost.css";
import { PostContext } from "../../hook/context/PostContext";
export const WriteNewPost = () => {
  const {setTogglePostModal}=useContext(PostContext)
  return (
    <div className="new-post-case" onClick={()=>setTogglePostModal(true)}>
      <span>✍️</span>
      <ion-icon size="large" name="leaf-sharp"></ion-icon>
    </div>
  );
};
