import type { Meta, StoryObj } from "@storybook/react";

import { UserImage } from "./index";

const meta = {
  title: "Components/UserImage",
  component: UserImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "mobile",
  },
} satisfies Meta<typeof UserImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [
    (UserImage) => (
      <div
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <UserImage />
      </div>
    ),
  ],
};
