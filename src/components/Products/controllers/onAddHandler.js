const onAddHandler = (
  option,
  { product, counter, setCounter, cart, setCart }
) => {
  if (option === "increment" && counter < product.stock) {
    counter++;
    setCounter(counter);
    setCart("test");
    console.log(cart);
  } else if (option === "decrement" && counter > 0) {
    setCounter(--counter);
  }
};

export default onAddHandler;
