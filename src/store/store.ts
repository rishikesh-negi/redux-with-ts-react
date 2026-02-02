import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Getting the type of the app state stored by the Redux store --> ReturnType is a built-in TS utility type to access the return type of a function type. The getState method returns the state held by the store. So, to assign the type of the store's state to RootState, we access the type of the return value of the getState method:
export type RootState = ReturnType<typeof store.getState>;

// Creating a base type from the type Redux's dispatch function:
export type AppDispatch = typeof store.dispatch;
