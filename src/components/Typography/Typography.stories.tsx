import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./index";

const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "primary",
    children: "Titulo do card",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [
    (Typography) => (
      <div
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <Typography>Titulo do card</Typography>
      </div>
    ),
  ],
};
