import React from "react";

const CartItem = ({ product }) => {
  return (
    <div className="info">
      <img src={product.nftimage} alt="nft" />
      <span>{product.name}</span>
      <span>{product.price.toFixed(4)}</span>
      <span>{product.oncart}</span>
      <span>{(product.oncart * product.price).toFixed(4)}</span>
    </div>
  );
};

export default CartItem;
