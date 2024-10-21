// import {configureStore} from '@reduxjs/toolkit';

// import appReducer from './reducer/app';

// export default configureStore({
//   reducer: {
//     app: appReducer,
//   },
// });


// /src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
  },
});
