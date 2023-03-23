import { useContext } from "react";
import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <CartSvg className="cart-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
