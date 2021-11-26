import { useState } from "react";
const ItemCount = ({ product, initial, onAddHandler, setCart, cart }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-div">
      <button
        onClick={() =>
          onAddHandler("decrement", {
            counter: counter,
            setCounter: setCounter,
            initial: initial,
            product: product,
            cart: cart,
            setCart: setCart,
          })
        }
      >
        -
      </button>
      <p>{counter}</p>

      <button
        onClick={() =>
          onAddHandler("increment", {
            counter: counter,
            setCounter: setCounter,
            initial: initial,
            product: product,
            cart: cart,
            setCart: setCart,
          })
        }
      >
        +
      </button>
      <button>Add to Cart</button>
    </div>
  );
};
export default ItemCount;
