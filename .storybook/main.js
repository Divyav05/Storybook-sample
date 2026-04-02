/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/TodoItem.stories.jsx"], // Point directly to the file
  addons: ["@chromatic-com/storybook", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      build: {
        minify: false, // STOPS the wH[e] renaming
        terserOptions: { mangle: false }, // Double protection
        sourcemap: false,
      },
      // This helps with path resolution in some Windows environments
      resolve: {
        alias: {
          '@': '/src',
        },
      },
    });
  },
};
export default config;