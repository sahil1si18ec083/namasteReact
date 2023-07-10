import { createSlice } from "@reduxjs/toolkit";

export const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = appReducer.actions;

export default appReducer.reducer;
