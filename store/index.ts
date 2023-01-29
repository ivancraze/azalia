import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { httpClient } from '@/services/http';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoriteSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const persistProducts = persistReducer(persistConfig, productsReducer);
const persistCart = persistReducer(persistConfig, cartReducer);
const persistFavorites = persistReducer(persistConfig, favoritesReducer);

export const makeStore = () =>
  configureStore({
    reducer: {
      [httpClient.reducerPath]: httpClient.reducer,
      products: persistProducts,
      cart: persistCart,
      favorites: persistFavorites,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(httpClient.middleware),
  });

export const wrapper = createWrapper<AppStore>(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
