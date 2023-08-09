type Type = "mobile" | "web";

export type TagVariants = {
  [key in Type]: string;
};

export type TagProps = {
  type: Type;
};
