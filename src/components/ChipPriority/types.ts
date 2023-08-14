export type Priority = "low" | "medium" | "high" | "disabled";

export type ChipVariants = {
  [key in Priority]: string;
};

export type ChipPriorityProps = {
  priority: Priority;
  disabled?: boolean;
};
