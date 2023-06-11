import { Link } from "react-router-dom";
//internal imports
import "./Footer.css";
export const MobileFooter = () => {
  return (
    <footer className="footer-case">
        <Link title="Home">
          <ion-icon name="home" size="small" id="ftr-icon"></ion-icon>
        </Link>
        <Link title="Explore">
          <ion-icon name="aperture" size="small" id="ftr-icon"></ion-icon>
        </Link>
        <Link title="BookMarks">
          <ion-icon name="bookmark" size="small" id="ftr-icon"></ion-icon>
        </Link>
        <Link title="user profile">
          <ion-icon name="person-circle" size="small" id="ftr-icon"></ion-icon>
        </Link>
        <Link title="logout">
          <ion-icon name="log-out" size="small" id="ftr-icon"></ion-icon>
        </Link>
        {/* <Link title="login"><ion-icon name="log-in"></ion-icon></Link> */}
    </footer>
  );
};
export { MobileFooter as default };
