

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    categories: [],
    selectedProduct: null,
  },
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setProduct(state, action) {
      state.selectedProduct = action.payload;
    },
   
  },
});

export const { setProductList, setCategories, setProduct } = productSlice.actions;

export default productSlice.reducer;

