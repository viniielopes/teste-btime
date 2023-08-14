import { Card } from "@/types/board";

export type ModalCardForm = Omit<Card, "endDate"> & {
  endDate: Date;
};
