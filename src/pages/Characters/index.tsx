import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setPage,
  pageNext,
  pagePrev,
  setSearch,
  useFilter,
  setOption,
  useGetAllCharactersQuery,
} from "../../context/store";
import {
  Statuses,
  Pagination,
} from "../../components";
import Search from "./components/Search";
import Card from "./components/Card";

const Characters: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const filter = useFilter();

  const {
    data,
    isError,
    isLoading,
    isFetching,
  } = useGetAllCharactersQuery(filter);

  const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => 
    dispatch(setSearch(event.target.value));
    
  const onOptionFilter = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(setOption(event.target.value as FilterOptionType));

  const renderStatuses = useCallback((): React.ReactElement => {
    if (isError) {
      return (
        <Statuses 
          type="error" 
          label="Not found" 
          value={`${filter.search} with ${filter.option}`} />
      );
    }

    if (isLoading || isFetching) {
      return (
        <Statuses 
          type="warning" 
          label="Await"
          value="loading..."/>
      );
    }

    return (
      <Statuses
        type="information"
        label="Total Characters"
        value={`${data?.info.count} found`} />
    );
  }, [isError, isLoading, isFetching, data]);
  
  return (
    <React.Fragment>
      {renderStatuses()}

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
        onNext={() => dispatch(pageNext())}
        onPrev={() => dispatch(pagePrev())}
        onPage={(page: number) => dispatch(setPage(page))} />

      <div className='grow flex flex-wrap justify-center gap-2 p-2'>
        {data?.results?.map((element: CharacterType) => <Card key={element.id} {...element} />)}
      </div>
    </React.Fragment>
  );
};

export default Characters;
