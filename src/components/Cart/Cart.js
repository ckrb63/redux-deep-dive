import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const items = useSelector((state) => state.items);
  const context = items.map((item) => (
    <CartItem
      item={{
        title: item.name,
        quantity: item.count,
        total: item.price * item.count,
        price: item.price,
      }}
      key={item.name}
    />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {context}
      </ul>
    </Card>
  );
};

export default Cart;
