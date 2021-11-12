import StyledItemList from "./StyledItemList.js";
import Product from "../Product";
const ItemListContainer = ({ products }) => {
  return (
    <StyledItemList>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </StyledItemList>
  );
};

export default ItemListContainer;
