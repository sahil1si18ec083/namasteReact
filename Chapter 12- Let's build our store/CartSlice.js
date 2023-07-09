import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { addItem } = CartSlice.actions;
export default CartSlice.reducer;
