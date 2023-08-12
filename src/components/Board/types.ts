import { Card } from "@/types/board";

export type BoardProps = {
  id: number | string;
  title: string;
  cards: Card[];
};
