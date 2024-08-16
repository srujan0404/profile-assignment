import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProduct = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[indexProduct].quantity = quantity;
      } else {
        state.items = (state.items).filter(item => item.productId !== productId);
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addToCart, changeQuantity, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
