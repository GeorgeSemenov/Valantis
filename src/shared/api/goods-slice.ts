import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URLS } from "./baseUrls";

export const goodsSlice = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URLS.VALANTIS_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Barer ");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => "/psdfsdf",
    }),
  }),
});
// const goodsSlice = createApi({
//   reducerPath: "goodsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URLS.VALANTIS_URL,
//     prepareHeaders: (headers) => {
//       headers.set("Authorization", "Barer ");
//       return headers;
//     },
//     tag.types:['goods'],
//     ednpoints: (build)=>({
//       getGoods: build.query({
//         query:()=>'/payments',
//       })
//     })
//   }),
// });

export const arr = {};
