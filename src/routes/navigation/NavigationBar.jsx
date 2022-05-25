import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "./../../assests/crown.svg";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
          {/* <Link className="nav-link"></Link>
          <Link className="nav-link"></Link>
          <Link className="nav-link"></Link> */}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default NavigationBar;
