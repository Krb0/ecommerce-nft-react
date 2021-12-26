import removeItem from "./removeItem";
import { store } from "react-notifications-component";

const notificationHandler = () => {
  store.addNotification({
    title: "Item Added",
    message: `New Product Added`,
    type: "default",
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1000,
      onScreen: true,
    },
  });
};

const addItem = (item, quantity, cart, setCart, setButtonSwitch = false) => {
  if (quantity === 0) removeItem(item, cart, setCart);
  else {
    if (setButtonSwitch) {
      setButtonSwitch(true);
    }
    const newProduct = { item: item, quantity: quantity };
    const filteredCart = cart.filter((prod) => prod.item.id !== item.id);

    setCart([...filteredCart, newProduct]);
    notificationHandler();
  }
};

export default addItem;
