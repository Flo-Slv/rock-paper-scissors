import { create } from "zustand";

type store = {
  nickName: string;
  addNickName: (nickName: string) => void;
};

const useStore = create<store>((set) => ({
  nickName: "",
  addNickName: (nickName: string) =>
    set((state) => {
      return {
        ...state,
        nickName: nickName,
      };
    }),
}));

export default useStore;
