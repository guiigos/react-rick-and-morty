import React from "react";

type StatusesProp = {
  type: "information" | "warning" | "error",
  label: string,
  value?: number | string,
};

const Statuses: React.FC<StatusesProp> = ({ type, label, value }): React.ReactElement => {
  const returnClassType = () => {
    switch (type) {
      case "information": return "text-blue-500";
      case "warning": return "text-yellow-500";
      case "error": return "text-red-500";
      default: return "";
    }
  };

  return (
    <p className="p-2">
      <strong>{label}:</strong> <small className={returnClassType()}>{value}</small>
    </p>
  );
};

export default Statuses;
