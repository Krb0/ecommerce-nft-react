import { useState, useContext } from "react";
import { CartContext } from "../GlobalComponents/CartContext";
const ItemCount = ({ product, initial, onAddHandler }) => {
  const [counter, setCounter] = useState(product.oncart ? product.oncart : 0);
  const [cart, setCart] = useContext(CartContext);
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
