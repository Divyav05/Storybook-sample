/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // Use a more direct path to avoid "importer" resolution errors
  stories: ["../src/TodoItem.stories.jsx"], 
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      build: {
        ...config.build,
        minify: false, // Keep this off for now
        sourcemap: true,
      },
    };
  },
};
export default config;