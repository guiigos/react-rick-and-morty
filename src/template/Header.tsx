import React from "react";
import { useNavigate } from "react-router-dom";

const itens: string[] = ["characters", "episodes", "locations"];

const Header: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <header className='bg-yellow-800 border-solid border-b-4 border-yellow-600 text-slate-100 grid grid-cols-4 gap-4 p-2'>
      <h1 className="font-bold text-lg p-2">Rick and Morty</h1>

      <div className="col-span-2 flex flex-row justify-end gap-4 underline">
        {itens.map((menu) => (<nav key={menu} className="flex items-center cursor-pointer capitalize" onClick={() => navigate(`/${menu}`)}>{menu}</nav>))}
      </div>

      <span className="text-right">switch theme</span>
    </header>
  )
}

export default Header;
