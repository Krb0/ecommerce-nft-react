import React from "react";
import Item from "./Item";
import StyledItemList from "./StyledItemList";

const ItemList = ({ pagesVisited, itemsPerPage, cart, setCart, products }) => {
  console.log("test");
  return (
    <StyledItemList>
      {products
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((product) => {
          return (
            <Item
              product={product}
              key={product.key}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
    </StyledItemList>
  );
};

export default ItemList;
