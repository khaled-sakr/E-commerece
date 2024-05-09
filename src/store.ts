import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import favReducer from "./features/favSlice";
import userReducer from "./features/userSlice";
export const store = configureStore({
  reducer: { cart: cartReducer, favourite: favReducer, user: userReducer },
});

export default store;
