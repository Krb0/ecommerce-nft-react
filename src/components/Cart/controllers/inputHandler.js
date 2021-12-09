const inputHandler = ({ cart, product, event: e, item, setCart }) => {
  const newCart = cart.filter((prod) => product.item !== prod.item);
  const newQuantity =
    product.item.stock >= e.target.value ? e.target.value : product.item.stock;
  e.target.value = newQuantity;
  setCart([...newCart, { item: item, quantity: newQuantity }]);
};

export default inputHandler;
