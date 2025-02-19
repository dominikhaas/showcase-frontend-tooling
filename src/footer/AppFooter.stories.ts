import AppFooter from './AppFooter.vue'

import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'footer/AppFooter',
  component: AppFooter,
} as Meta<typeof AppFooter>

export const Primary: StoryFn<typeof AppFooter> = () => ({
  components: { AppFooter },
  template: '<AppFooter/>',
})
