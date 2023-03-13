import React from "react";
import clsx from "clsx";

import useStore from "../utils/zustand/store";

const Players = () => {
  const nickName = useStore((state) => state.nickName);
  const userChoice = useStore((state) => state.userChoice);
  const userScore = useStore((state) => state.userScore);
  const computerScore = useStore((state) => state.computerScore);
  const computerChoice = useStore((state) => state.computerChoice);

  return (
    <div
      className={clsx("text-xl", "flex flex-col md:flex md:flex-row md:gap-16")}
    >
      <div className="w-[250px] rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-xl sm:p-6 lg:p-8">
        <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
          {nickName ? nickName : "Enter a nickname"}
        </h3>

        <p className="mt-4 text-sm text-gray-300">Score: {userScore}</p>

        <p className="mt-4 text-sm text-gray-300">
          {userChoice ? userChoice : "Please select an item to play"}
        </p>
      </div>

      <div>WINNER IS...</div>

      <div className="w-[250px] rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-xl sm:p-6 lg:p-8">
        <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
          Computer
        </h3>

        <p className="mt-4 text-sm text-gray-300">Score: {computerScore}</p>

        <p className="mt-4 text-sm text-gray-300">
          {computerChoice ? computerChoice : "Waiting..."}
        </p>
      </div>
    </div>
  );
};

export default Players;
