import { ChipPriorityProps, ChipVariants } from "./types";

export const ChipPriority = ({
  priority = "low",
  disabled = false,
}: ChipPriorityProps) => {
  const bgVariants: ChipVariants = {
    low: "bg-feedback-green text-dark-grey font-semibold",
    medium: "bg-feedback-warning text-dark-grey font-semibold",
    high: "bg-feedback-error text-white text-white font-semibold",
    disabled: "bg-light-grey text-white",
  };

  const variants = disabled ? bgVariants.disabled : bgVariants[priority];

  return (
    <div className={`w-fit rounded-2xl ${variants}`}>
      <p className="px-3 py-2 text-xs capitalize">{priority}</p>
    </div>
  );
};
