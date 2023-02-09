import { createSlice } from "@reduxjs/toolkit";

const initialState: FilterType = {
  page: 1,
  search: "",
  option: "name",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    pageNext: (state) => {
      state.page++;
    },
    pagePrev: (state) => {
      state.page--;
    },
    setPage: (state, action: {
      type: string,
      payload: number,
    }) => {
      state.page = action.payload;
    },
    setSearch: (state, action: {
      type: string,
      payload: string,
    }) => {
      state.page = 1;
      state.search = action.payload;
    },
    setOption: (state, action: {
      type: string,
      payload: FilterOptionType,
    }) => {
      state.page = 1;
      state.option = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default filterSlice;
export const {
  pageNext,
  pagePrev,
  setPage,
  setSearch,
  setOption,
} = filterSlice.actions;
