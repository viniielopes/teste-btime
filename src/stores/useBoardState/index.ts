import { create } from "zustand";
import { BoardState } from "./types";
import { mockBoards, mockCards } from "@/mock";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBoardState = create<BoardState>()(
  persist(
    (set) => ({
      cards: mockCards,
      columns: mockBoards,
      activeColumn: null,
      activeCard: null,

      setActiveCard: (activeCard) => set(() => ({ activeCard })),
      setActiveColumn: (activeColumn) => set(() => ({ activeColumn })),
      setCards: (cards) => set(() => ({ cards })),
      setColumns: (columns) => set(() => ({ columns })),
    }),
    {
      name: "board-state",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
