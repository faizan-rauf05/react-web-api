import { createSlice } from "@reduxjs/toolkit";


const cartData = createSlice({
  name: "cart",
  initialState:{
    cartItems:[],
  },
  reducers: {
    addCartData: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addCartData } = cartData.actions;
export default cartData.reducer;