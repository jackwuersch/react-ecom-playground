import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  TitleAndPrice,
  Quantity,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <TitleAndPrice> {name} </TitleAndPrice>
      <Quantity>
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </Quantity>
      <TitleAndPrice> {price}</TitleAndPrice>
      <div
        className="remove-button"
        onClick={() => deleteItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
