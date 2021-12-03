import React from "react";

const CartItem = ({ product }) => {
  const { item, quantity } = product;
  return (
    <div className="info">
      <img src={item.nftimage} alt="nft" />
      <span>{item.name}</span>
      <span>{item.price.toFixed(4)}</span>
      <span>{quantity}</span>
      <span>{(quantity * item.price).toFixed(4)}</span>
    </div>
  );
};

export default CartItem;
