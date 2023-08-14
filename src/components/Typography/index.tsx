import { TypographyProps, TypographyVariants } from "./types";

export const Typography = ({
  variant = "primary",
  children,
}: TypographyProps) => {
  const typographyVariants: TypographyVariants = {
    title: "text-xl font-semibold text-text-primary",
    primary: "text-text-primary font-medium text-sm",
    secondary: "text-text-secondary font-normal text-xs",
  };

  return <p className={`${typographyVariants[variant]}`}>{children}</p>;
};
