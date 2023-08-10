import { TagProps, TagVariants } from "./types";

export const Tag = ({ type = "mobile" }: TagProps) => {
  const tagVariants: TagVariants = {
    mobile: "bg-tag-mobile text-white",
    web: "bg-tag-web text-white",
  };

  return (
    <div className={`rounded ${tagVariants[type]}`}>
      <p className="px-3 py-2 text-xs font-normal capitalize">{type}</p>
    </div>
  );
};
