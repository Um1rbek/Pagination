import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (page = 1) => `/photos?_page=${page}&_limit=8`,
    }),
  }),
});

export const { useGetPhotosQuery } = photosApi;
