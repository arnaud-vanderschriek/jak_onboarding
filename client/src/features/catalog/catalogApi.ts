//import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/products";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQueryWithErrorHandling,
  //baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5001/api'}),
  endpoints: (builder => ({
    fetchProducts: builder.query<Product[], void>({              // génération de react hooks que nous pouvons utiliser à l'intérieur
      query: () => ({ url: 'products' })                        // de nos composants...
    }),
    fetchProductDetails: builder.query<Product, number>({
      query: (productId) => `products/${productId}`
    })
  }))
});

export const { useFetchProductDetailsQuery, useFetchProductsQuery } = catalogApi   // <<<<<=========  On peut désormais utiliser les hooks