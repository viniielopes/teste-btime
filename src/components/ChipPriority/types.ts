type Priority = "low" | "medium" | "high";

export type ChipVariants = {
  [key in Priority]: string;
};

export type ChipPriorityProps = {
  priority: Priority;
};
