import type { Meta, StoryObj } from "@storybook/react";

import { ChipPriority } from "./index";

const meta = {
  title: "Components/ChipPriority",
  component: ChipPriority,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    priority: "low",
  },
} satisfies Meta<typeof ChipPriority>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [
    (ChipPriority) => (
      <div
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <ChipPriority />
      </div>
    ),
  ],
};
