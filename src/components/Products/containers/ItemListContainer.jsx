import ReactPagination from "react-paginate";
import ItemList from "../ItemList";
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
      <ItemList
        pagesVisited={pagesVisited}
        itemsPerPage={itemsPerPage}
        cart={cart}
        setCart={setCart}
        products={products}
      />
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
