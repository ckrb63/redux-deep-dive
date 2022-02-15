import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isOpen: false,
    notification : null
  },
  reducers: {
    openCart(state) {
      state.isOpen = !state.isOpen;
    },
    showNotification(state, action) {
      state.notification = {
        status : action.payload.status,
        title : action.payload.title,
        message : action.payload.message
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
