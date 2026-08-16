import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartCount: 0,
  },
  
  reducers: {
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
      if (state.cartCount) state.cartCount -= 1;
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
