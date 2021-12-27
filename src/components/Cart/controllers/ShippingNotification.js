import { store } from "react-notifications-component";

const notificationHandler = (isDeluxe) => {
  store.addNotification({
    title: `${isDeluxe ? "Deluxe Shipping" : "Normal Shipping"}`,
    message: `${
      isDeluxe
        ? "Deluxe Shippings has been selected (+0.02 eth)"
        : "Normal Shipping has been selected (free)"
    }`,
    type: "default",
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};

export default notificationHandler;
