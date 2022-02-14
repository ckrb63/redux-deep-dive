import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  items: [],
  totalCnt: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart(state) {
      state.isOpen = !state.isOpen;
    },
    increaseItem(state, action) {
      const idx = state.items.findIndex((e) => e.name === action.payload);
      state.items[idx].count++;
      state.totalCnt++;
    },
    decreaseItem(state, action) {
      const idx = state.items.findIndex((e) => e.name === action.payload);
      state.items[idx].count--;
      state.totalCnt--;
      if (state.items[idx].count === 0) {
        state.items.splice(idx, 1);
      }
    },
    addItem(state, action) {
      const isExist = state.items.find((item) => item.name === action.payload.name);
      if (isExist) {
        const idx = state.items.findIndex((e) => e.name === action.payload.name);
        state.items[idx].count++;
      } else {
        state.items.unshift({ name: action.payload.name, count: 1, price: action.payload.price });
      }
      state.totalCnt++;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
