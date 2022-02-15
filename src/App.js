import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData,getCartData } from "./store/cart-slice";
let isInit = true;
function App() {
  const cartIsOpen = useSelector((state) => state.ui.isOpen);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartData());
  },[dispatch]);
  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    } else {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsOpen && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
