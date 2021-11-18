import { useEffect, useState } from "react";
import StyledProductsPage from "../components/Products/StyledProductsPage";
import getAllProducts from "../utils/getAllProducts";

const Products = ({ ItemListContainer, allProducts, setAllProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProducts
      .then((res) => {
        setFilteredProducts(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <StyledProductsPage>
      <input
        type="search"
        onChange={(e) => searchChange(e, allProducts, setFilteredProducts)}
        placeholder="Search NFTs..."
        autoFocus
      />
      <ItemListContainer products={filteredProducts} />
    </StyledProductsPage>
  );
};

const searchChange = (event, products, setFilteredProducts) => {
  const filteredProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  setFilteredProducts(filteredProducts);
};

export default Products;
