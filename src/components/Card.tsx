import React, { useState } from "react";
import { useLazyGetOneCharacterQuery } from "../context/store";

const Card: React.FC<CharacterType> = ({ id, name, species, gender, status, image }): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  const [call, { data, isError }] = useLazyGetOneCharacterQuery();

  function handleDetail(): void {
    setShow(current => !current);
    call(id);
  }

  return (
    <div onClick={handleDetail} className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-xl text-zinc-800 relative cursor-pointer'>
      <div style={{backgroundImage: `url(${image})`}} className="bg-cover bg-center rounded-t-lg w-[300px] h-[300px]">
        <span className="bg-yellow-500 rounded-full border-2 border-yellow-600 float-right font-bold capitalize px-3 m-3">{status}</span>

        {!!data && show && (
          <div className="w-full absolute top-[210px] flex flex-col-reverse bg-sky-300 p-2 truncate">
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
}

export default Card;
