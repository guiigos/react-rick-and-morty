import React from "react";
import { useDispatch } from "react-redux";
import {
  useFilter,
  useGetAllCharactersQuery,
  pageNext,
  pagePrev,
  setPage,
  setSearch,
  setOption,
} from "../../context/store";
import {
  Card,
  Info,
  Error,
  Search,
  Loading,
  Pagination,
} from "../../components";

const Characters: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const filter = useFilter();

  const {
    data,
    isError,
    isLoading,
    isFetching,
  } = useGetAllCharactersQuery(filter);

  function onChangeFilter(event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(setSearch(event.target.value));
  }

  function onOptionFilter(event: React.ChangeEvent<HTMLSelectElement>): void {
    dispatch(setOption(event.target.value as FilterOptionType));
  }

  function onNext(): void {
    dispatch(pageNext());
  }

  function onPrev(): void {
    dispatch(pagePrev());
  }

  function onPage(page: number): void {
    dispatch(setPage(page));
  }

  return (
    <React.Fragment>
      <Info
        label="Total Characters"
        value={data?.info.count} />

      <Search
        placeholder="Search"
        value={filter.search}
        onChange={onChangeFilter}
        onOption={onOptionFilter} />

      <Pagination
        total={data?.info.pages}
        current={filter.page}
        hasNext={!!data?.info.next}
        hasPrev={!!data?.info.prev}
        onNext={onNext}
        onPrev={onPrev}
        onPage={onPage} />

      {(isLoading || isFetching) && <Loading />}
      {isError && <Error />}

      <div className='grow flex flex-wrap justify-center gap-2 p-2'>
        {data?.results?.map((element: CharacterType) => (<Card key={element.id} {...element} />))}
      </div>
    </React.Fragment>
  )
}

export default Characters;
