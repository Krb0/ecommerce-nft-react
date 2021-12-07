import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const CartItem = ({ product, setCart, cart }) => {
  const { item, quantity } = product;
  return (
    <div className="info">
      <img src={item.nftimage} alt="nft" />
      <span>{item.name}</span>
      <span>
        {item.price.toFixed(4)}
        <FontAwesomeIcon icon={faEthereum} />
      </span>
      <span className="span-input">
        <input
          placeholder={quantity}
          onChange={(e) => {
            const newCart = cart.filter((prod) => product.item !== prod.item);
            const newQuantity =
              product.item.stock >= e.target.value
                ? e.target.value
                : product.item.stock;
            e.target.value = newQuantity;
            setCart([...newCart, { item: item, quantity: newQuantity }]);
          }}
        />
      </span>
      <span>
        {(quantity * item.price).toFixed(4)}
        <FontAwesomeIcon icon={faEthereum} />
      </span>
    </div>
  );
};

export default CartItem;
