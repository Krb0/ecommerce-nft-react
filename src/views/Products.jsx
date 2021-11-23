import { useEffect, useState } from "react";
import StyledProductsPage from "./StyledProductsPage";
import getAllProducts from "../utils/getAllProducts";
import Loader from '../components/GlobalComponents/Loader.jsx'
const Products = ({ ItemListContainer, allProducts, setAllProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [page, setPage] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProducts
      .then((res) => {
        setAllProducts(res);
        setFilteredProducts(res);
      })
      .catch((error) => console.log(error));
  }, [setAllProducts]);
  return (
    <StyledProductsPage>
      {allProducts.length === 0 ? <Loader /> :
        <>
          <input
        type="search"
        onChange={(e) => searchChange(e, allProducts, setFilteredProducts,setPage)}
        placeholder="Search NFTs..."
        autoFocus
          />
          <ItemListContainer products={filteredProducts} page={page} setPage={setPage} />
        </>}
      
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
