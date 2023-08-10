import { ChipPriority } from "../ChipPriority";
import { Tag } from "../Tag";
import { Typography } from "../Typography";
import { UserImage } from "../UserImage";

export const Card = () => {
  return (
    <div className="flex w-72 flex-col gap-2 rounded border border-dark-grey bg-white p-2">
      <ChipPriority priority="low"></ChipPriority>
      <Typography variant="primary">
        This is task description that will wrap autmatically into a new line
      </Typography>
      <div className="flex gap-2">
        <Tag type="mobile" />

        <Tag type="web" />
      </div>
      <Typography variant="secondary">Mar 3, 2020</Typography>

      <div className="flex justify-end">
        <UserImage />
      </div>
    </div>
  );
};
