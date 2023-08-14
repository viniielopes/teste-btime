export type Priority = "low" | "medium" | "high";
export type DragTypes = "Column" | "Card";

export type TagType =
  | "design"
  | "devops"
  | "backend"
  | "mobile"
  | "web"
  | "disabled";

export type Column = {
  id: number | string;
  title: string;
};

export type File = {
  name: string;
  link: string;
};

export type Card = {
  id: number | string;
  columnID: "todo" | "progress" | "completed" | string | number;
  title: string;
  description: string;
  priority: Priority;
  tags: TagType[];
  endDate: number;
  files: File[];
};
