import removeItem from "./removeItem";
const addItem = (item, quantity, cart, setCart) => {
  if (quantity === 0) removeItem(item, cart, setCart);
  else {
    const newProduct = { item: item, quantity: quantity };
    const filteredCart = cart.filter((prod) => prod.item.id !== item.id);
    setCart([...filteredCart, newProduct]);
  }
};

export default addItem;
