import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const cartTotalCnt = useSelector(state=>state.cart.totalCnt);
  const dispatch = useDispatch();
  const cartOpen = () => {
    dispatch(uiActions.openCart());
  };
  return (
    <button className={classes.button} onClick={cartOpen}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalCnt}</span>
    </button>
  );
};

export default CartButton;
