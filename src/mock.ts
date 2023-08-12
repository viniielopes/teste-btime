import { CardProps } from "./components/Card/types";

export const mockBoards = [
  {
    id: "todo",
    title: "Todo",
  },
  { id: "progress", title: "In Progress" },
  { id: "completed", title: "Completed" },
];

export const mockCards: CardProps[] = [
  {
    id: 5,
    columnID: "todo",
    title: "Essa task aqui foi feita para o teste",
    priority: "low",
    tags: ["mobile", "web"],
    endDate: new Date().getTime(),
  },
  {
    id: 7,
    columnID: "progress",
    title: "Essa task aqui foi feita para o teste",
    priority: "medium",
    tags: ["mobile", "web"],
    endDate: new Date().getTime(),
  },
  {
    columnID: "progress",
    id: 8,
    title: "Essa task aqui foi feita para o teste",
    priority: "high",
    tags: ["mobile"],
    endDate: new Date().getTime(),
  },
  {
    columnID: "completed",
    id: 9,
    title: "Essa task aqui foi feita para o teste",
    priority: "low",
    tags: ["mobile"],
    endDate: new Date().getTime(),
  },
  {
    columnID: "completed",
    id: 10,
    title: "Essa task aqui foi feita para o teste",
    priority: "medium",
    tags: ["mobile"],
    endDate: new Date().getTime(),
  },
  {
    columnID: "completed",
    id: 11,
    title: "Essa task aqui foi feita para o teste",
    priority: "high",
    tags: ["mobile"],
    endDate: new Date().getTime(),
  },
];
