import React from "react";

type SearchProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOption: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Search: React.FC<SearchProps> = ({ 
  placeholder, 
  value, 
  onChange, 
  onOption,
}) => (
  <div className="bg-yellow-600 rounded-lg flex flex-row flex-nowrap justify-between p-2 m-2">
    <input
      type="search"
      placeholder={placeholder}
      className="w-full p-2"
      value={value}
      onChange={onChange} />

    <select className="p-2" onChange={onOption}>
      <option value="name">Name</option>
      <option value="status">Status</option>
      <option value="species">Species</option>
      <option value="gender">Gender</option>
    </select>
  </div>
);

export default Search;
