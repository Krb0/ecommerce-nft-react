import getAllProducts from "../handlers/getAllProducts";
const allProducts = getAllProducts();
const Products = ({ ItemListContainer }) => {
  const greetings = "Saludo desde /products";
  return (
    <div>
      <ItemListContainer greetings={greetings} products={allProducts} />
    </div>
  );
};
export default Products;
