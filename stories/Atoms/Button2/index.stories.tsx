import type { Meta, StoryObj } from "@storybook/react";

import { Button2 } from ".";

const figmaUrl = process.env.TOY_DK_FIGMA_URL;

const meta: Meta<typeof Button2> = {
  title: "toy-design-kit/Atoms/Button2",
  component: Button2,
  parameters: {
    design: {
      type: "figma",
      url: `${figmaUrl}?node-id=1-29`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button2>;

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
