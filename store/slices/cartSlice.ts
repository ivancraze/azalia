import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem, ICartState, IProduct } from '@/types';

const initialState: ICartState = {
  items: {},
};

export const cartSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<ICartItem>) {
      state.items[payload.product.id] = {
        product: payload.product,
        amount: payload.amount,
      };
    },
    removeFromCart: (state, { payload }: PayloadAction<IProduct>) => {
      delete state.items[payload.id];
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
