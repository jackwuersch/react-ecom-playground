import { CategoriesContainer } from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.component";

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
