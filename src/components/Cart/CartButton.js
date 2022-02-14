import classes from "./CartButton.module.css";
import { cartActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const cartTotalCnt = useSelector(state=>state.totalCnt);
  const dispatch = useDispatch();
  const cartOpen = () => {
    dispatch(cartActions.openCart());
  };
  return (
    <button className={classes.button} onClick={cartOpen}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalCnt}</span>
    </button>
  );
};

export default CartButton;
