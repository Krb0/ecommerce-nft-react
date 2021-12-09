import { useEffect, useState } from "react";
import StyledProductsPage from "./StyledProductsPage";
import getAllProducts from "../utils/getAllProducts";
import Loader from "../components/GlobalComponents/Loader.jsx";
import Sorter from "../components/Products/Sorter";
import { getCategoryDocs } from "../Firebase/firebase";
import { useParams } from "react-router-dom";
const Products = ({ ItemListContainer, allProducts, setAllProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [page, setPage] = useState(0);
  const { idCategory } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProducts().then((res) => {
      if (idCategory) {
        getCategoryDocs(idCategory).then((filteredCategory) => {
          if (filteredCategory.length === 0) {
            window.location.href = "/notfound";
          } else {
            setAllProducts(filteredCategory);
            setFilteredProducts(filteredCategory);
          }
        });
      } else {
        setAllProducts(res);
        setFilteredProducts(res);
      }
    });
  }, [setAllProducts, idCategory]);

  return (
    <StyledProductsPage>
      {allProducts.length === 0 ? (
        <Loader />
      ) : (
        <>
          <Sorter
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            allProducts={allProducts}
          />
          <input
            type="search"
            onChange={(e) =>
              searchChange(e, allProducts, setFilteredProducts, setPage)
            }
            placeholder="Search NFTs..."
            autoFocus
          />

          <ItemListContainer
            products={filteredProducts}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </StyledProductsPage>
  );
};

const searchChange = (event, products, setFilteredProducts, setPage) => {
  const filteredProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  setPage(0);
  setFilteredProducts(filteredProducts);
};

export default Products;
