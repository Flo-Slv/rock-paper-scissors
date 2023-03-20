import React from "react";
import clsx from "clsx";

import store from "../../utils/zustand/store";

const PlayButton = () => {
  const nickName = store((state) => state.nickName);
  const userChoice = store((state) => state.userChoice);
  const setComputerChoice = store((state) => state.setComputerChoice);
  const setScore = store((state) => state.setScore);

  const handleClick = (e: any) => {
    e.preventDefault();

    setComputerChoice();
    setScore();
  };

  return (
    <button
      className={clsx(
        "w-[50px] h-[50px] p-4 sm:p-6 lg:p-8 mt-4",
        "rounded-xl border border-gray-800 bg-gray-900 shadow-xl",
        "text-indigo-300 hover:text-indigo-400 text-lg",
        "flex justify-center items-center",
        `${nickName && userChoice ? "cursor-pointer" : "cursor-not-allowed"}`
      )}
      onClick={(e) => handleClick(e)}
      disabled={nickName && userChoice ? Boolean(false) : Boolean(true)}
    >
      Play
    </button>
  );
};

export default PlayButton;
