import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { IProduct } from '@/types';

export const httpClient = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});

export const productApi = httpClient
  .enhanceEndpoints({
    addTagTypes: ['products'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      products: builder.query<IProduct[], undefined>({
        query: () => `/products`,
      }),
    }),
  });
