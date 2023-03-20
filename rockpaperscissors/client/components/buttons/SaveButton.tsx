import React from "react";
import clsx from "clsx";
import { useMutation } from "@apollo/client";

import store from "../../utils/zustand/store";
import CREATE_RESULT from "../../utils/graphql/mutations/createResult";

const SaveButton = () => {
  const nickName = store((state) => state.nickName);
  const userScore = store((state) => state.userScore);
  const computerScore = store((state) => state.computerScore);

  const [createResult, { error, loading }] = useMutation(CREATE_RESULT);

  if (loading) return <div>Submitting...</div>;

  if (error) return <div>"Error..."</div>;

  const handleClick = (e: any) => {
    e.preventDefault();

    createResult({
      variables: {
        nickName: nickName,
        userScore: userScore,
        computerScore: computerScore,
      },
    });
  };

  return (
    <button
      className={clsx(
        "w-[50px] h-[50px] p-4 sm:p-6 lg:p-8 mt-4",
        "rounded-xl border border-gray-800 bg-gray-900 shadow-xl",
        "text-indigo-300 hover:text-indigo-400 text-lg",
        "flex justify-center items-center",
        `${userScore > 0 ? "cursor-pointer" : "cursor-not-allowed"}`
      )}
      onClick={(e) => handleClick(e)}
      disabled={userScore > 0 ? Boolean(false) : Boolean(true)}
    >
      Save
    </button>
  );
};

export default SaveButton;
