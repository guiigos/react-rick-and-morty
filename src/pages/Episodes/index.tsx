import React, { useEffect, useState } from "react";
import { useGetAllEpisodesQuery } from "../../context/store";
import {
  Statuses,
  Pagination,
 } from "../../components";
 import Card from "./components/Card";

const Episodes: React.FC = (): React.ReactElement => {

  const [page, setPage] = useState<number>(1);
  const [episodes, setEpisodes] = useState([]);
  const [option, setOption] = useState();

  const {
    data
  } = useGetAllEpisodesQuery({
    page
  });

  useEffect(() => {
    console.log(data);

    if (data?.results) {
      // TODO: Encontrar uma maneira mais elegante de concatenação
      setEpisodes((current) => [...current, ...data?.results]);
    }

    if (data?.info.next) {
      // TODO: Fazer a chamada através do link que vem na requisição
      setPage((current) => current + 1);
    }
  }, [data]);

  return (
    <React.Fragment>
      <select onChange={(event) => {
        const { characters } = episodes.find(({ id }) => id === event.target.value);
        console.log(characters);
      }}>
        {episodes.map(({ id, episode, name }) => (<option key={id} value={id}>{episode} - {name}</option>))}
      </select>

      {/*
      <Pagination
        total={data?.info.pages}
        current={page}
        hasNext={!!data?.info.next}
        hasPrev={!!data?.info.prev}
        onNext={() => setPage((current) => current + 1)}
        onPrev={() => setPage((current) => current - 1)}
        onPage={setPage} />
      */}

      {/* {data?.results.map((element: EpisodesType) => <Card key={element.id} {...element} />)} */}
    </React.Fragment>
  )
}

export default Episodes;
