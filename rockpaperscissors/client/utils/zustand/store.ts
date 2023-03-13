import { create } from "zustand";

type Store = {
  nickName: string;
  addNickName: (nickName: string) => void;
};

const useStore = create<Store>((set) => ({
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
