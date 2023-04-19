import React from "react";
import { useNavigate } from "react-router-dom";

const ITENS: string[] = ["characters", "episodes", "locations"];

type NavigatorProps = {
  menu: string,
};

const Navigator: React.FC<NavigatorProps> = ({ menu }): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <nav 
      className="flex items-center cursor-pointer capitalize" 
      onClick={() => navigate(`/${menu}`)}>
        {menu}
    </nav>
  );
};

const Header: React.FC = (): React.ReactElement => (
  <header className='bg-yellow-800 border-solid border-b-4 border-yellow-600 text-slate-100 grid grid-cols-4 gap-4 p-2'>
    <h1 className="font-bold text-lg p-2">Rick and Morty</h1>

    <div className="col-span-2 flex flex-row justify-end gap-4 underline">
      {ITENS.map((menu) => <Navigator key={menu} menu={menu} />)}
    </div>

    <span className="text-right">switch theme</span>
  </header>
);

export default Header;
