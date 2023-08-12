import { create } from "zustand";
import { ActiveModalState } from "./types";

export const useModal = create<ActiveModalState>()((set) => ({
  show: false,
  setShow: (show) => set(() => ({ show })),
}));
