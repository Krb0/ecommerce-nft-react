import StyledItemList from "./StyledItemList.js";
import Item from "../Item";
const ItemListContainer = ({ products }) => {
  return (
    <StyledItemList>
      {products.map((product) => (
        <Item product={product} />
      ))}
    </StyledItemList>
  );
};

export default ItemListContainer;
