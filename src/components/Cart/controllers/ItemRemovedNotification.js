import { store } from "react-notifications-component";

const notificationHandler = (isCartEmpty) => {
  store.addNotification({
    title: `${isCartEmpty ? "All items removed" : "An item removed"}`,
    message: `${
      isCartEmpty
        ? "All items have been removed from the cart"
        : "An item has been removed from the cart"
    }`,
    type: "danger",
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1500,
      onScreen: true,
    },
  });
};

export default notificationHandler;
