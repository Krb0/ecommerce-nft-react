import getAllProducts from "../handlers/getAllProducts";
import StyledHomePage from "../components/Products/StyledProductsPage";
const allProducts = getAllProducts();
const Products = ({ ItemListContainer }) => {
  const greetings = "Saludo desde /products";
  return (
    <StyledHomePage>
      <ItemListContainer greetings={greetings} products={allProducts} />
    </StyledHomePage>
  );
};
export default Products;
