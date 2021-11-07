const Products = ({ ItemListContainer }) => {
  const greetings = "Saludo desde /products";
  return (
    <div>
      <ItemListContainer greetings={greetings} />
    </div>
  );
};
export default Products;
