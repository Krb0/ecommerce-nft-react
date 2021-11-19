import StyledItemList from "./StyledItemList.js";
import Item from "../Item";
const ItemListContainer = ({ products }) => {
  return (
    <StyledItemList>
      {products.map((product) => (
        <Item product={product} key={product.key} />
      ))}
    </StyledItemList>
  );
};

export default ItemListContainer;
