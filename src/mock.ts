import { Card } from "./types/board";

export const mockBoards = [
  {
    id: "todo",
    title: "Todo",
  },
  { id: "progress", title: "In Progress" },
  { id: "completed", title: "Completed" },
];

export const mockCards: Card[] = [
  {
    id: 5,
    columnID: "todo",
    title: "task do todo",
    priority: "low",
    tags: ["mobile", "web"],
    endDate: new Date().getTime(),
    files: [],
    description: "testando 123",
  },
  {
    id: 7,
    columnID: "progress",
    title: "Essa task aqui foi feita para o teste",
    priority: "medium",
    tags: ["mobile", "web"],
    endDate: new Date().getTime(),
    files: [],
    description: "testando 123",
  },
  {
    columnID: "progress",
    id: 8,
    title: "Essa task aqui foi feita para o teste",
    priority: "high",
    tags: ["mobile"],
    endDate: new Date().getTime(),
    files: [],
    description: "testando 123",
  },
  {
    columnID: "completed",
    id: 9,
    title: "Essa task aqui foi feita para o teste",
    priority: "low",
    tags: ["mobile"],
    files: [],
    description: "testando 123",
    endDate: new Date().getTime(),
  },
  {
    columnID: "completed",
    id: 10,
    title: "Essa task aqui foi feita para o teste",
    priority: "medium",
    files: [],
    description: "testando 123",
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
    files: [],
    description: "testando 123",
  },
];
