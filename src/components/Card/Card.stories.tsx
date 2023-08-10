import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
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
