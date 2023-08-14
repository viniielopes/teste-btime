import { Column } from "@/types/board";

type ModalFormProps = {
  activeColumn: Column;
};

export interface ActiveModalState {
  data: ModalFormProps;
  show: boolean;
  setShow: (show: boolean) => void;
  toggleShow: (data: ModalFormProps) => void;
}
