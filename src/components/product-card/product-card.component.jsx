import {
  ProductCardContainer,
  StyledImg,
  ProductCardFooter,
  Title,
} from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <StyledImg src={imageUrl} alt={`${name}`}></StyledImg>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
      <ProductCardFooter>
        <Title>{name}</Title>
        <br />
        <span>¥{price}</span>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
