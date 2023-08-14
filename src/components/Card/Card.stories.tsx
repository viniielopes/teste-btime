import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {
    card: {
      columnID: "completed",
      id: 11,
      title: "Essa task aqui foi feita para o teste",
      priority: "high",
      tags: ["mobile"],
      endDate: new Date().getTime(),
      files: [],
      description: "testando 123",
    },
    column: {
      id: "0",
      title: "Titulo",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [
    (Card) => (
      <div
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <Card></Card>
      </div>
    ),
  ],
};
