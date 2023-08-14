import { Card, Column } from "@/types/board";

export type BoardProps = {
  column: Column;
  cards: Card[] | null;
};
