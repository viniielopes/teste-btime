import { ChipPriorityProps } from "./types";

export const ChipPriority = ({ priority = "low" }: ChipPriorityProps) => {
  const bgVariants = {
    low: "bg-feedback-green",
    medium: "bg-feedback-warning",
    high: "bg-feedback-error text-white",
  };

  return (
    <div className={`rounded-2xl ${bgVariants[priority]}`}>
      <p className="px-2 py-1 text-xs font-normal capitalize">{priority}</p>
    </div>
  );
};
