import { useState, useEffect } from "react";
import ReactPagination from "react-paginate";
import ItemList from "../Items/ItemList";
const ItemListContainer = ({ products, page, setPage }) => {
  const [selected, setSelected] = useState(0);
  const onPageChange = ({ selected }) => {
    setSelected(selected);
  };

  const itemsPerPage = 20;
  const pagesVisited = page * itemsPerPage;
  let pageCount = Math.ceil(products.length / itemsPerPage);
  useEffect(() => {
    setPage(selected);
  }, [selected, setPage]);
  useEffect(() => {
    setPage(0);
  }, [pageCount, setPage]);
  return (
    <>
      <ReactPagination
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount === 0 ? 1 : pageCount}
        forcePage={page}
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
        products={products}
      />
      <ReactPagination
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount === 0 ? 1 : pageCount}
        forcePage={page}
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
