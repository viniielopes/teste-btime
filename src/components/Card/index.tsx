import { ChipPriority } from "../ChipPriority";
import { Tag } from "../Tag";
import { Typography } from "../Typography";
import { UserImage } from "../UserImage";
import { CardProps } from "./types";

export const Card = ({ title, priority, tags, endDate }: CardProps) => {
  return (
    <div
      onClick={() => alert("clicou aqui")}
      className="flex w-72 flex-col gap-2 rounded border border-dark-grey bg-white p-2"
    >
      <ChipPriority priority={priority}></ChipPriority>
      <Typography variant="primary">{title}</Typography>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <Tag key={tag} type={tag} />
        ))}
      </div>
      <Typography variant="secondary">{endDate}</Typography>

      <div className="flex justify-end">
        <UserImage />
      </div>
    </div>
  );
};
