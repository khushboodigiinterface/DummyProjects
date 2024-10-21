import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartList.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartList.push({ ...product, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.cartList = state.cartList.filter(item => item.id !== productId);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
