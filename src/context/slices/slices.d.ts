declare type FilterOptionType = "name" | "status" | "species" | "gender";

declare type FilterType = {
  page: number,
  search: string,
  option: FilterOptionType,
};

declare type StoreType = {
  filter: FilterType,
};
