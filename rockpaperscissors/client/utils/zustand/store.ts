import { create } from "zustand";

type Store = {
  nickName: string;
  setNickName: (nickName: string) => void;
  userChoice: string;
  setUserChoice: (userChoice: string) => void;
  computerChoice: string;
  setComputerChoice: () => void;
  userScore: number;
  computerScore: number;
  setScore: () => void;
  winner: string;
};

const useStore = create<Store>((set) => ({
  nickName: "",
  setNickName: (nickName: string) =>
    set((state) => {
      return {
        ...state,
        nickName: nickName,
      };
    }),
  userChoice: "",
  setUserChoice: (userChoice: string) =>
    set((state) => {
      return {
        ...state,
        userChoice: userChoice,
      };
    }),
  computerChoice: "",
  setComputerChoice: () =>
    set((state) => {
      const setRandomChoice = () => {
        const choices = ["rock", "paper", "scissors"];

        const result = choices[Math.floor(Math.random() * 3)];

        return result;
      };

      return {
        ...state,
        computerChoice: setRandomChoice(),
      };
    }),
  userScore: 0,
  computerScore: 0,
  equality: Boolean(false),
  winner: "",
  setScore: () =>
    set((state) => {
      const user = state.userChoice;
      const computer = state.computerChoice;
      let res = 0;

      // User win
      if (user === "rock" && computer === "scissors") res = 1;
      else if (user === "paper" && computer === "rock") res = 1;
      else if (user === "scissors" && computer === "paper") res = 1;
      // Computer win
      else if (user === "rock" && computer === "paper") res = -1;
      else if (user === "paper" && computer === "scissors") res = -1;
      else if (user === "scissors" && computer === "rock") res = -1;

      return {
        ...state,
        userScore: res === 1 ? state.userScore + 1 : state.userScore,
        computerScore:
          res === -1 ? state.computerScore + 1 : state.computerScore,
        winner:
          res === 1 ? state.nickName : res === -1 ? "Computer" : "equality",
      };
    }),
}));

export default useStore;
