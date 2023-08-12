import { TagType } from "@/types/board";

export type TagVariants = {
  [key in TagType]: string;
};

export type TagProps = {
  type: TagType;
};
