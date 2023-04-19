import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const charactersAPI = createApi({
  reducerPath: "charactersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<ResponseApiAllCharactersType, FilterType>({
      query: ({ page, search, option }) => ({
        method: "GET",
        url: `/character?page=${page}&${option}=${search}`,
      }),
    }),
    getOneCharacter: builder.query<CharacterDetailType, number>({
      query: (id) => ({
        method: "GET",
        url: `/character/${id}`,
      }),
    }),



    getMultipleCharacters: builder.query({
      query: (ids) => ({
        url: `/character/${ids}`,
        method: "GET",
      }),
    }),
  }),
});

export default charactersAPI;
export const {
  useGetAllCharactersQuery,
  useLazyGetOneCharacterQuery,
  useGetMultipleCharactersQuery,
} = charactersAPI;
