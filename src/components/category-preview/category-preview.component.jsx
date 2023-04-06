import {
  CategoryPreviewContainer,
  PreviewContainer,
  TitleLink,
} from "./category-preview.styles.jsx";

import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title} className="title">
          {title.toUpperCase()}
        </TitleLink>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
