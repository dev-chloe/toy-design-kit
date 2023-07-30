import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const figmaUrl = process.env.TOY_DK_FIGMA_URL;

const meta: Meta<typeof Button> = {
  title: "toy-design-kit/Atoms/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: `${ figmaUrl }?node-id=1-29`,
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
