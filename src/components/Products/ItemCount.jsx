import { useState, useContext } from "react";
import { CartContext } from "../GlobalComponents/CartContext";
import onCounter from "./controllers/onCounter";
import addItem from "../../utils/addItem";
const ItemCount = ({ product, initial, onAddHandler }) => {
  const [counter, setCounter] = useState(product.oncart ? product.oncart : 0);
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="counter-div">
      <button
        onClick={() =>
          onCounter("decrement", {
            counter: counter,
            setCounter: setCounter,
          })
        }
      >
        -
      </button>
      <p>{counter}</p>

      <button
        onClick={() =>
          onCounter("increment", {
            counter: counter,
            setCounter: setCounter,
            product: product,
          })
        }
      >
        +
      </button>
      <button onClick={() => addItem(product, counter, cart, setCart)}>
        Add to Cart
      </button>
    </div>
  );
};
export default ItemCount;
