import type { Preview } from '@storybook/vue3'

import { setup } from '@storybook/vue3';
import i18n from '../src/i18n/i18n'
import { createPinia } from 'pinia'

import '../src/index.css';


setup((app) => {
  console.log("lala")
  app.use(i18n);
  app.use(createPinia());
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}


export default preview


import { withScreenshot } from 'storycap';

export const decorators = [
  withScreenshot, // Registration the decorator is required
];

export const parameters = {
  // Global parameter is optional.
  screenshot: {
    // Put global screenshot parameters(e.g. viewport)
  },
};
