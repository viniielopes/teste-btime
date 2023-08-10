import { ReactNode } from "react";

type Variant = "primary" | "secondary";

export type TypographyVariants = {
  [key in Variant]: string;
};

export type CardProps = {
  children: ReactNode;
  variant: Variant;
};
