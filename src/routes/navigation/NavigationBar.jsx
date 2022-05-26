import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../components/contexts/UserContext";
import { signOutUser } from "../../utilities/firebase/firebase";
import { ReactComponent as CrownLogo } from "./../../assests/crown.svg";

import "./NavigationBar.scss";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}

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
