import React from "react";
import { useParams } from "react-router-dom";
import { useGetOneEpisodeQuery, useGetMultipleCharactersQuery } from "../../context/store";

const Details: React.FC = (): React.ReactElement => {
  const { id = '' } = useParams();

  const {
    data
  } = useGetOneEpisodeQuery(parseInt(id));

  var {
    data: episodeCharacters = [],
  } = useGetMultipleCharactersQuery(
    data?.characters.map((character: string) => character.split("/").pop())
  );

  return (
    <React.Fragment>
      <p>{data?.episode}</p>
      <p>{data?.name}</p>

      {episodeCharacters?.map((character: any) => (
        <img width={100} height={100} src={character.image} />
      ))}
    </React.Fragment>
  )
}

export default Details;
