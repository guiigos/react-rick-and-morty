import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const episodesAPI = createApi({
  reducerPath: "episodesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getAllEpisodes: builder.query<{
      info: ResponseApiInfoType,
      results: EpisodesType[],
    }, any>({
      query: ({ page }) => ({
        url: `/episode?page=${page}`,
        method: "GET",
      }),
    }),
    getOneEpisode: builder.query<EpisodesType, number>({
      query: (id) => ({
        url: `/episode/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export default episodesAPI;
export const {
  useGetAllEpisodesQuery,
  useGetOneEpisodeQuery,
} = episodesAPI;
