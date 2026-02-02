import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Type of a value that the slice will store:
export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

// Type for the initial state of the slice:
export type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

// The PayloadAction generic type allows us to add some type information about the action and its payload:
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>,
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (itemIndex < 0) return;

      if (state.items[itemIndex].quantity > 1)
        state.items[itemIndex].quantity--;
      else state.items.splice(itemIndex, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
