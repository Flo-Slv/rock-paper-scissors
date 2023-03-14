import React from "react";

import useStore from "../utils/zustand/store";

const Winner = () => {
  const winner = useStore((state) => state.winner);

  return (
    <div className="w-[150px] h-[250px] flex flex-col items-center justify-center">
      {winner && winner === "equality" ? (
        <p>Equality</p>
      ) : winner && winner !== "equality" ? (
        <p>Winner is... {winner}</p>
      ) : (
        <p>Waiting...</p>
      )}
    </div>
  );
};

export default Winner;
