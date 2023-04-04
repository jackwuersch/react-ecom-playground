import "./product-card.styles.scss";

import Button from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
      <div className="product-card-footer">
        <span className="title">{name}</span>
        <br />
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
