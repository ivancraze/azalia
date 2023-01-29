import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';

import { IProductListState } from '@/types';

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

const initialState: IProductListState = {
  products: [],
  error: '',
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    });
  },
});
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
