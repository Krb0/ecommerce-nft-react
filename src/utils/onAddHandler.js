const onAddHandler = (option, { initial, stock, counter, setCounter }) => {
  if (option === "increment" && counter < stock) setCounter(++counter);
  else if (option === "decrement" && counter > 0) setCounter(--counter);
};

export default onAddHandler;
