import React from "react";
import clsx from "clsx";

import useStore from "./utils/zustand/store";

import NickNameForm from "./components/NickNameForm";
import Results from "./components/Results";
import Players from "./components/Players";

import "./style.css";

const App: React.FC = () => {
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
          "flex flex-row justify-center pt-16 mb-16"
        )}
      >
        Rock Paper Scissors
      </h1>

      {nickName.length ? (
        <h2
          className={clsx(
            "text-xl sm:text-3xl md:text-4xl lg:text-5xl",
            "flex justify-center"
          )}
        >
          Let's play {nickName} !
        </h2>
      ) : (
        <NickNameForm />
      )}

      <div className={clsx("flex flex-col items-center justify-center")}>
        <div className="w-28 flex flex-col gap-5 mb-16"></div>
        <Players />
        <Results />
      </div>
    </div>
  );
};

export default App;
