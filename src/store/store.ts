import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Getting the type of the app's state that's stored by Redux --> ReturnType is a built-in TS utility type to access the return type of a function type. The getState method returns the state held by the Redux store. So, to assign the type of the store's state to RootState, we access the type of the return value of the getState method:
export type RootState = ReturnType<typeof store.getState>;
// The RootState type is then used as the type argument of TypedUseSelectorHook<T>, which is a type provided by react-redux to create a custom state selector that adds some store-state-specific type awareness to the regular selector provided by the useSelector Redux hook (see useAppSelector in hooks.ts).

// Creating a type for the return value of a custom, app-state-specific dispatch hook with type awareness, from the type of Redux store's dispatch function:
export type AppDispatch = typeof store.dispatch;
// The AppDispatch type is used as the return type of the function type of the custom dispatch hook (see useAppDispatch in hooks.ts)
