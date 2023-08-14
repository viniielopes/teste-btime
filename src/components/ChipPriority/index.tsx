import { useTranslations } from "next-intl";
import { ChipPriorityProps, ChipVariants } from "./types";

export const ChipPriority = ({
  priority = "low",
  disabled = false,
}: ChipPriorityProps) => {
  const t = useTranslations("priority");

  const bgVariants: ChipVariants = {
    low: "bg-feedback-green text-dark-grey dark:text-white font-semibold",
    medium: "bg-feedback-warning text-dark-grey dark:text-white font-semibold",
    high: "bg-feedback-error text-white font-semibold",
    disabled: "bg-light-grey text-white",
  };

  const variants = disabled ? bgVariants.disabled : bgVariants[priority];

  return (
    <div className={`w-fit rounded-2xl ${variants}`}>
      <p className="px-3 py-2 text-xs capitalize">{t(priority)}</p>
    </div>
  );
};
