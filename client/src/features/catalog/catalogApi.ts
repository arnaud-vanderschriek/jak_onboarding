//import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/products";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { ProductParams } from "../../app/models/productParams";
import { filterEmptyValues } from "../../lib/util";
import type { Pagination } from "../../app/models/pagination";

export const catalogApi = createApi({
  reducerPath: 'catalogApi',                                                                      // De base on utilise la requete ci-dessous, dans notre cas, on fait
  // une requête personnalisée pour gérer les erreurs
  baseQuery: baseQueryWithErrorHandling,                                                          //baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5001/api'}),
  endpoints: (builder) => ({
    fetchProducts: builder.query<{ items: Product[], pagination: Pagination }, ProductParams>({    // génération de react hooks que nous pouvons utiliser à l'intérieur
      // de nos composants...
      query: (productParams) => {
        return {
          url: 'products',
          params: filterEmptyValues(productParams)
        }
      },
      transformResponse: (items: Product[], meta) => {
        const paginationHeader = meta?.response?.headers.get("Pagination");
        const pagination = paginationHeader ? JSON.parse(paginationHeader) : null;
        return { items, pagination }
      }
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