import React from "react";

type InfoProp = {
  label: string,
  value?: number,
};

const Info: React.FC<InfoProp> = ({ label, value = 0 }): React.ReactElement => (
  <span className="p-2"><strong>{label}:</strong> {value}</span>
);

export default Info;
