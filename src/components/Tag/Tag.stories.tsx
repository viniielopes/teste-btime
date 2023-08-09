import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./index";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "mobile",
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [
    (Tag) => (
      <div
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <Tag />
      </div>
    ),
  ],
};
