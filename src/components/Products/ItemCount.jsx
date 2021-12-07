import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import onCounter from "./controllers/onCounter";
import addItem from "../../utils/addItem";
const ItemCount = ({ product, initial, onAddHandler }) => {
  const counterInitial = () => {
    const itemExists = cart.find((cartItem) => cartItem.item.id === product.id);
    return itemExists ? itemExists.quantity : 0;
  };
  const [cart, setCart] = useContext(CartContext);
  const [counter, setCounter] = useState(counterInitial());
  const [buttonSwitch, setButtonSwitch] = useState(false);

  return (
    <div className="counter-div">
      {buttonSwitch ? (
        <Link to="/cart">
          <button className="end-purchase">Complete Purchase</button>
        </Link>
      ) : (
        <>
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

          <button
            onClick={() =>
              addItem(product, counter, cart, setCart, setButtonSwitch)
            }
          >
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
};
export default ItemCount;
