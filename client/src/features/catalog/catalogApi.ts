//import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/products";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { ProductParams } from "../../app/models/productParams";
import { filterEmptyValues } from "../../lib/util";

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQueryWithErrorHandling,
  //baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5001/api'}),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], ProductParams>({              // génération de react hooks que nous pouvons utiliser à l'intérieur
      query: (productParams) => {
        return {
          url: 'products',
          params: filterEmptyValues(productParams)
        }
      }                                                                   // de nos composants...
    }),
    fetchProductDetails: builder.query<Product, number>({
      query: (productId) => `products/${productId}`
    }),
    fetchFilters: builder.query<{ brands: string[], types: string[] }, void>({
      query: () => 'products/filters'
    })
  })
});

export const { useFetchProductDetailsQuery, useFetchProductsQuery, useFetchFiltersQuery } = catalogApi   // <<<<<=========  On peut désormais utiliser les hooks