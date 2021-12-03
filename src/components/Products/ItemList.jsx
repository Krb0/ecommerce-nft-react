import React from "react";
import Item from "./Item";
import StyledItemList from "./containers/StyledItemList";

const ItemList = ({ pagesVisited, itemsPerPage, products }) => {
  return (
    <StyledItemList>
      {products
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((product) => {
          return (
            <Item
              product={product}
              key={product.key}
            />
          );
        })}
    </StyledItemList>
  );
};

export default ItemList;
