import removeItem from "./removeItem";
const addItem = (item, quantity, cart, setCart, setButtonSwitch = false) => {
  if (quantity === 0) removeItem(item, cart, setCart);
  else {
    if (setButtonSwitch) {
      setButtonSwitch(true);
    }
    const newProduct = { item: item, quantity: quantity };
    const filteredCart = cart.filter((prod) => prod.item.id !== item.id);
    setCart([...filteredCart, newProduct]);
  }
};

export default addItem;
