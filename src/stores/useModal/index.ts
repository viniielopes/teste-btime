import { create } from "zustand";
import { ActiveModalState } from "./types";

export const useModal = create<ActiveModalState>()((set) => ({
  data: {
    activeColumn: {
      id: 0,
      title: "",
    },
  },
  show: false,
  setShow: (show) => set(() => ({ show })),
  toggleShow: (data) => set((state) => ({ show: !state.show, data: data })),
}));