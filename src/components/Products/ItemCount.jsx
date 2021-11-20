import { useState } from "react";
import onAddHandler from "../../utils/onAddHandler";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-div">
      <button
        onClick={() =>
          onAddHandler("decrement", {
            counter: counter,
            setCounter: setCounter,
            initial: initial,
            stock: stock,
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
            stock: stock,
          })
        }
      >
        +
      </button>
      <button>Agregar</button>
    </div>
  );
};
export default ItemCount;
