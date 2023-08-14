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
  id: string;
  title: string;
};

export type File = {
  name: string;
  link: string;
};

export type Card = {
  id: number;
  columnID: "todo" | "progress" | "completed" | string;
  title: string;
  description: string;
  priority: Priority;
  tags: TagType[];
  endDate: number;
  files: File[];
};
