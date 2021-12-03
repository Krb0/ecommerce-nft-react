const onCounterHandler = (option, { product, counter, setCounter }) => {
  if (option === "increment" && counter < product.stock) {
    counter++;
    setCounter(counter);
  } else if (option === "decrement" && counter > 0) {
    counter--;
    setCounter(counter);
  }
};

export default onCounterHandler;
