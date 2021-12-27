import React from "react";
import inputHandler from "./controllers/inputHandler";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import notificationHandler from "./controllers/ItemRemovedNotification";
const CartItem = ({ product, setCart, cart }) => {
  const { item, quantity } = product;
  return (
    <div className="info">
      <div className="info-image">
        <Link to={`/products/${product.item.id}`}>
          <img src={item.nftimage} alt="nft" />
        </Link>
        <span>{item.name}</span>
      </div>

      <div className="info-quantity">
        <input
          placeholder={quantity}
          onChange={(e) => {
            inputHandler({
              cart: cart,
              product: product,
              event: e,
              item: item,
              setCart: setCart,
            });
          }}
        />
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={() => {
            const filteredCart = cart.filter(
              (prod) => prod.item.id !== item.id
            );
            setCart(filteredCart);
            if (filteredCart.length === 0) notificationHandler(true);
            else notificationHandler(false);
          }}
        />
      </div>
      <div className="info-price">
        <span>
          {(quantity * item.price).toFixed(4)}
          <FontAwesomeIcon icon={faEthereum} />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
