import { ReactNode } from "react";

type Variant = "title" | "primary" | "secondary";

export type TypographyVariants = {
  [key in Variant]: string;
};

export type TypographyProps = {
  children: ReactNode;
  variant: Variant;
};
