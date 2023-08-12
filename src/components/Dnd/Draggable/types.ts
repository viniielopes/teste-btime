import { Card, Column, DragTypes } from "@/types/board";
import { ReactNode } from "react";

export type DraggableProps = {
  children: ReactNode;
  id: number | string;
  type: DragTypes;
  card?: Card;
  column?: Column;
};
