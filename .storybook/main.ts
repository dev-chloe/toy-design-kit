import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  env: {

  }
  // TODO: https://github.com/storybookjs/storybook/issues/19691
  // env: (config) => ({
  //   ...config,
  //   FIGMA_URL: process.env.TOY_DK_FIGMA_URL,
  // }),
};
export default config;
