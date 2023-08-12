import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "toy-design-kit/Atoms/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.TOY_DK_FIGMA_URL}?node-id=1-29`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Sign up",
    kind: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Sign up",
    kind: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    label: "Sign up",
    kind: "ghost",
  },
};
