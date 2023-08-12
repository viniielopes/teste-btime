export type Priority = "low" | "medium" | "high";
export type DragTypes = "Column" | "Card";

export type TagType = "mobile" | "web";

export type Column = {
  id: number | string;
  title: string;
};

export type Card = {
  id: number | string;
  columnID: "todo" | "progress" | "completed" | string | number;
  title: string;
  priority: Priority;
  tags: TagType[];
  endDate: number;
};
