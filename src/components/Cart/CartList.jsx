import CartItem from "./CartItem";
const CartList = ({ cart, setCart }) => {
  return (
    <div className="info-container">
      {cart.map((prod) => (
        <CartItem product={prod} key={prod.item.id} />
      ))}
    </div>
  );
};

export default CartList;
