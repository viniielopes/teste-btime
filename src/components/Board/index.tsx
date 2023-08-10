import { Card } from "../Card";
import { Typography } from "../Typography";

export const Board = () => {
  return (
    <div className="rounded border border-light-grey p-4">
      <div className="flex flex-col gap-4">
        <Typography variant="primary">Todo</Typography>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};
