import React, { useState } from "react";
import clsx from "clsx";

import useStore from "./utils/zustand/store";

import NickNameForm from "./components/NickNameForm";
import Players from "./components/Players";
import UserChoice from "./components/UserChoice";
import PlayButton from "./components/PlayButton";
import ResultModal from "./components/ResultModal";

import "./style.css";

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(Boolean(false));

  console.log("openModal: ", openModal);

  const handleCloseModal = () => setOpenModal(Boolean(false));

  const nickName = useStore((state) => state.nickName);

  return (
    <div
      className={clsx(
        "h-screen font-play",
        "bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900"
      )}
    >
      <h1
        className={clsx(
          "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
          "font-bold font-lobster",
          "flex flex-row justify-center pt-10 mb-16"
        )}
      >
        Rock Paper Scissors
      </h1>

      {nickName.length ? (
        <div className="flex flex-row justify-between">
          <div className="w-1/3"></div>

          <div className="w-1/3">
            <h2
              className={clsx(
                "text-xl sm:text-3xl md:text-4xl lg:text-5xl",
                "flex justify-center"
              )}
            >
              Let's play {nickName} !
            </h2>
          </div>

          <div className="w-1/3 flex flex-col sm:flex-row justify-center">
            <button
              className={clsx(
                "w-[80px] h-[50px] p-4 sm:p-6 lg:p-8",
                "rounded-xl border border-gray-800 bg-gray-900 shadow-xl",
                "text-indigo-300 hover:text-indigo-400 text-lg",
                "flex justify-center items-center"
              )}
              onClick={() => setOpenModal(Boolean(true))}
            >
              Results
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between">
          <div className="w-1/3"></div>

          <div className="w-1/3">
            <NickNameForm />
          </div>

          <div className="w-1/3 flex flex-col sm:flex-row justify-center">
            <button
              className={clsx(
                "w-[80px] h-[50px] p-4 sm:p-6 lg:p-8",
                "rounded-xl border border-gray-800 bg-gray-900 shadow-xl",
                "text-indigo-300 hover:text-indigo-400 text-lg",
                "flex justify-center items-center"
              )}
              onClick={() => setOpenModal(Boolean(true))}
            >
              Results
            </button>
          </div>
        </div>
      )}

      <div className={clsx("flex flex-col items-center justify-center")}>
        <div className="w-28 flex flex-col gap-5 mb-16"></div>
        <Players />
        <UserChoice />
        <PlayButton />
      </div>

      {openModal && (
        <ResultModal
          openModal={Boolean(true)}
          handleCloseModal={() => handleCloseModal()}
        />
      )}
    </div>
  );
};

export default App;
