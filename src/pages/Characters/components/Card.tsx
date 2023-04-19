import React, { useState } from "react";
import { useLazyGetOneCharacterQuery } from "../../../context/store";
import {
  container,
  card,
  header,
  detail
} from "./Card.css"

const Card: React.FC<CharacterType> = ({
  id,
  name,
  species,
  gender,
  status,
  image,
}): React.ReactElement => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [callGetOneCharacterQuery, { data }] = useLazyGetOneCharacterQuery();

  const handleDetail = (): void => {
    setShowDetails(current => !current);
    callGetOneCharacterQuery(id);
  };

  return (
    <div onClick={handleDetail} className={container}>
      <div style={{backgroundImage: `url(${image})`}} className={card}>
        <span className={header}>{status}</span>

        {!!data && showDetails && (
          <div className={detail}>
            <small><strong className="text-sm">Number of episodes:</strong> {data.episode.length}</small>
            <small><strong className="text-sm">Location:</strong> {data.location.name}</small>
            <small><strong className="text-sm">Origin:</strong> {data.origin.name}</small>
          </div>
        )}
      </div>

      <div className="p-2">
        <p className="text-xl font-bold truncate">{name}</p>
        <p className="text-sm">{species} - {gender}</p>
      </div>
    </div>
  );
};

export default Card;
