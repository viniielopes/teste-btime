import { Card, Column } from "@/types/board";

type Variant = "primary" | "secondary";

export type TypographyVariants = {
  [key in Variant]: string;
};

export type CardProps = {
  card: Card;
  column: Column;
};
