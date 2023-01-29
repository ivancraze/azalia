import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { API_URL } from '@/constants';

import { IProduct } from '@/types';

export const httpClient = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
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
