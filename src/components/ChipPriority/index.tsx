import { ChipPriorityProps, ChipVariants } from "./types";

export const ChipPriority = ({ priority = "low" }: ChipPriorityProps) => {
  const bgVariants: ChipVariants = {
    low: "bg-feedback-green",
    medium: "bg-feedback-warning",
    high: "bg-feedback-error text-white",
  };

  return (
    <div className={`rounded-2xl ${bgVariants[priority]}`}>
      <p className="px-3 py-2 text-xs font-normal capitalize">{priority}</p>
    </div>
  );
};
