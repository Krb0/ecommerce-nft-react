const onAddHandler = (
  option,
  { product, counter, setCounter, cart, setCart }
) => {
  if (option === "increment" && counter < product.stock) {
    counter++;
    setCounter(counter);
    const temporalCounter = counter;
    const filteredCart = cart.filter((prod) => prod.id !== product.id);
    product.oncart = temporalCounter;
    setCart([...filteredCart, product]);
  } else if (option === "decrement" && counter > 0) {
    counter--;
    setCounter(counter);
    const temporalCounter = counter;
    product.oncart = temporalCounter;
    const filteredCart = cart.filter((prod) => prod.oncart > 0);
    setCart([...filteredCart]);
    console.log(filteredCart);
  }
};

export default onAddHandler;
