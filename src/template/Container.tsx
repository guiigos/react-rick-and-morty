import React from "react";

const Container: React.FC<React.PropsWithChildren> = ({ children }): React.ReactElement => (
  <main className="bg-yellow-50 flex justify-center min-h-screen">
    <div className="container grow flex flex-col">
      {children}
    </div>
  </main>
);

export default Container;
