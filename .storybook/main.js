import { join, dirname } from "path";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // Use a very specific pattern to help the importer find the file
  stories: ["../src/TodoItem.stories.jsx"], 
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      // Force Vite to preserve function names and paths
      build: {
        ...config.build,
        minify: false,
        sourcemap: false,
      },
      // Ensure the 'src' directory is resolved correctly regardless of OS
      resolve: {
        alias: {
          "@": join(process.cwd(), "src"),
        },
      },
    };
  },
};
export default config;