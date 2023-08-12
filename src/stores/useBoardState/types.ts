import { Card, Column } from "@/types/board";

export interface BoardState {
  columns: Column[] | null;
  cards: Card[] | null;
  activeColumn: Column | null;
  activeCard: Card | null;

  setActiveColumn: (column: Column | null) => void;
  setActiveCard: (card: Card | null) => void;
  setColumns: (Columns: Column[]) => void;
  setCards: (Cards: Card[]) => void;
}
