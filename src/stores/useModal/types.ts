import { Card, Column } from "@/types/board";

export type ModalFormProps = {
  activeColumn: Column;
  card?: Card;
};

export interface ActiveModalState {
  data: ModalFormProps;
  show: boolean;
  setShow: (show: boolean) => void;
  toggleShow: (data?: ModalFormProps) => void;
}
