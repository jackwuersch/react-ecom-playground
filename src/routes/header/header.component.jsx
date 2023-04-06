import { useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  HeaderContainer,
  HomeLink,
  HeaderLinks,
  HeaderLink,
} from "./header.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <HeaderContainer>
        <HomeLink to="/">HOME</HomeLink>
        <HeaderLinks>
          <HeaderLink className="header-link" to="/shop">
            SHOP
          </HeaderLink>
          {currentUser ? (
            <HeaderLink className="header-link" onClick={signOutUser}>
              SIGN OUT
            </HeaderLink>
          ) : (
            <HeaderLink className="header-link" to="/auth">
              SIGN IN
            </HeaderLink>
          )}
          <CartIcon />
        </HeaderLinks>
        {isCartOpen && <CartDropdown />}
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
