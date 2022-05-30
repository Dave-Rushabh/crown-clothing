import { useContext } from "react";
import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import CartIcon from "../../components/cart-icon/CartIcon";
import { Cart } from "../../components/contexts/CartContext";
import { UserContext } from "../../components/contexts/UserContext";
import { signOutUser } from "../../utilities/firebase/firebase";
import { ReactComponent as CrownLogo } from "./../../assests/crown.svg";

import {
  NavigationBarContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./NavigationBarStyle";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(Cart);

  return (
    <>
      <NavigationBarContainer>
        <LogoContainer className="logo-container" to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/authentication">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationBarContainer>

      <Outlet />
    </>
  );
};

export default NavigationBar;
