import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import charactersAPI, { useGetAllCharactersQuery, useLazyGetOneCharacterQuery, useGetMultipleCharactersQuery } from "./reducers/character";
import episodesAPI, { useGetAllEpisodesQuery, useGetOneEpisodeQuery } from "./reducers/episode";
import filterSlice, { pageNext, pagePrev, setPage, setSearch, setOption } from "./slices/filter";

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [charactersAPI.reducerPath]: charactersAPI.reducer,
    [episodesAPI.reducerPath]: episodesAPI.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    charactersAPI.middleware,
    episodesAPI.middleware,
  ),
});

setupListeners(store.dispatch);

export const useFilter = (): FilterType => useSelector((state: StoreType): FilterType => state.filter);
export {
  pageNext,
  pagePrev,
  setPage,
  setSearch,
  setOption,
  useGetAllCharactersQuery,
  useLazyGetOneCharacterQuery,
  useGetAllEpisodesQuery,
  useGetOneEpisodeQuery,
  useGetMultipleCharactersQuery,
};
