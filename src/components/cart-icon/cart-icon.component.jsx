import { useContext } from "react";
import {
  CartIconContainer,
  ShoppingCartIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingCartIcon className="cart-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
