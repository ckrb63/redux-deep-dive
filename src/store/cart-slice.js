import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const initialState = {
  items: [],
  totalCnt: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items;
      state.totalCnt = action.payload.totalCnt;
    },
    increaseItem(state, action) {
      const idx = state.items.findIndex((e) => e.name === action.payload);
      state.items[idx].count++;
      state.totalCnt++;
      state.changed = true;
    },
    decreaseItem(state, action) {
      const idx = state.items.findIndex((e) => e.name === action.payload);
      state.items[idx].count--;
      state.totalCnt--;
      state.changed = true;
      if (state.items[idx].count === 0) {
        state.items.splice(idx, 1);
      }
    },
    addItem(state, action) {
      const isExist = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (isExist) {
        const idx = state.items.findIndex(
          (e) => e.name === action.payload.name
        );
        state.items[idx].count++;
      } else {
        state.items.unshift({
          name: action.payload.name,
          count: 1,
          price: action.payload.price,
        });
      }
      state.changed = true;
      state.totalCnt++;
    },
  },
});
export const getCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://react-http-89f64-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("get cart data failed!");
      }
      const data = await response.json();
      dispatch(
        cartActions.setCart({
          items: data.items || [],
          totalCnt: data.totalCnt,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "get cart data failed!",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data!",
      })
    );
    try {
      const response = await fetch(
        "https://react-http-89f64-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({ items: cart.items, totalCnt: cart.totalCnt }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data failed!");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "send cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "sending error",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
