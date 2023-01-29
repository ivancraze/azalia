import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFavoriteItem, IFavoriteState, IProduct } from '@/types';

const initialState: IFavoriteState = {
  items: {},
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IFavoriteItem>) {
      state.items[payload.product.id] = {
        product: payload.product,
      };
    },
    removeFromFavorites: (state, { payload }: PayloadAction<IProduct>) => {
      delete state.items[payload.id];
    },
  },
});
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
