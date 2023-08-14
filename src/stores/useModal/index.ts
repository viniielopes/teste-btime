import { create } from "zustand";
import { ActiveModalState, ModalFormProps } from "./types";

const initialData: ModalFormProps = {
  card: {
    id: 0,
    columnID: "0",
    priority: "low",
    endDate: new Date().getTime(),
    tags: [],
    files: [],
    title: "Titulo editavel",
    description: "Descrição editavel",
  },
  activeColumn: {
    id: "00",
    title: "",
  },
};

export const useModal = create<ActiveModalState>()((set) => ({
  data: initialData,
  show: false,
  setShow: (show) => set(() => ({ show })),
  toggleShow: (data = initialData) =>
    set((state) => ({ show: !state.show, data: data })),
}));
