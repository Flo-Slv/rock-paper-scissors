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
  setScore: (userResult: number) => void;
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
  setScore: (userResult: number) =>
    set((state) => {
      return {
        ...state,
        userScore: userResult === 1 ? state.userScore + 1 : state.userScore - 1,
        computerScore:
          userResult === 1 ? state.computerScore - 1 : state.computerScore + 1,
      };
    }),
}));

export default useStore;
