import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllEpisodesQuery } from "../../context/store";
import { Pagination } from "../../components";

const Episodes: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);

  const {
    data
  } = useGetAllEpisodesQuery({
    page
  });

  function handleClick(id: number): void {
    navigate(`/episodes/${id}`);
  }

  return (
    <React.Fragment>
      <Pagination
        total={data?.info.pages}
        current={page}
        hasNext={!!data?.info.next}
        hasPrev={!!data?.info.prev}
        onNext={() => setPage((current) => current + 1)}
        onPrev={() => setPage((current) => current - 1)}
        onPage={setPage} />

      {data?.results.map((element) => <p key={element.id} className="cursor-pointer" onClick={() => handleClick(element.id)}>{element.episode} - {element.name}</p>)}
    </React.Fragment>
  )
}

export default Episodes;
