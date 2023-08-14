import { TagProps, TagVariants } from "./types";

export const Tag = ({ type = "mobile", disabled = false }: TagProps) => {
  const tagVariants: TagVariants = {
    devops: "text-white bg-feedback-warning",
    design: "text-white bg-feedback-error",
    backend: "text-white bg-feedback-green",
    mobile: "bg-tag-mobile text-white",
    web: "bg-tag-web text-white",
    disabled: "bg-dark-grey text-white",
  };

  const variant = disabled ? tagVariants.disabled : tagVariants[type];

  return (
    <div className={`rounded ${variant}`}>
      <p className="px-3 py-2 text-xs font-normal capitalize">{type}</p>
    </div>
  );
};
