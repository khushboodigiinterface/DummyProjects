import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appLoading: true,
  wishlist: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { setAppLoading, setWishlist, addToWishlist, removeFromWishlist } = appSlice.actions;
export default appSlice.reducer;
