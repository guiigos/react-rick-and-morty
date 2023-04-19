import React from "react";
import { useNavigate } from "react-router-dom";

const Card: React.FC<EpisodesType> = ({
  id,
  name,
  episode,
}): React.ReactElement => {
  const navigate = useNavigate();

  const handleDetail = (): void => {
    navigate(`/episodes/${id}`);
  };

  return (
    <p className="cursor-pointer" onClick={handleDetail}>
      {episode} - {name}
    </p>
  );
};

export default Card;
