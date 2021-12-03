const removeItem = (item, cart, setCart) => {
  const filteredCart = cart.filter((prod) => prod.item.id !== item.id);
  setCart([...filteredCart]);
};

export default removeItem;
