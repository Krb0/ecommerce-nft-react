import StyledItemList from "./StyledItemList.js";
import Item from "../Item";
import ReactPagination from "react-paginate";

const ItemListContainer = ({ products, page, setPage, cart, setCart }) => {
  const onPageChange = ({ selected }) => {
    setPage(selected);
  };

  const itemsPerPage = 20;
  const pagesVisited = page * itemsPerPage;

  const pageCount = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      <ReactPagination
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={"paginate-container"}
        previousLinkClassName={"paginate-previous-btn"}
        nextLinkClassName={"paginate-next-btn"}
        disabledClassName={"paginate-disabled"}
        activeClassName={"paginate-active"}
      />
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
      <ReactPagination
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={"paginate-container"}
        previousLinkClassName={"paginate-previous-btn"}
        nextLinkClassName={"paginate-next-btn"}
        disabledClassName={"paginate-disabled"}
        activeClassName={"paginate-active"}
      />
    </>
  );
};

export default ItemListContainer;
