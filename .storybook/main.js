/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/*.stories.@(js|jsx|ts|tsx)"], // Simplified glob
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: ".storybook/vite.config.js", // We will create this next
      },
    },
  },
};
export default config;