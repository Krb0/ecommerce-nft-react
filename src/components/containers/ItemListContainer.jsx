function ItemListContainer({ greetings, products }) {
  return (
    <div>
      {products.map((product) => (
        <img src={product.nftimage}></img>
      ))}{" "}
    </div>
  );
}

export default ItemListContainer;
