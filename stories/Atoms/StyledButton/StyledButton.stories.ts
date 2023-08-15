import type { Meta, StoryObj } from "@storybook/react";

import { StyledButton } from "./StyledButton";

const meta: Meta<typeof StyledButton> = {
  title: "toy-design-kit/Atoms/StyledButton",
  component: StyledButton,
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.TOY_DK_FIGMA_URL}?node-id=1-29`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof StyledButton>;

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
