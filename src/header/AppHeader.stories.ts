import AppHeader from './AppHeader.vue'

import { Meta, StoryFn } from '@storybook/vue3'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'header/AppHeader',
  component: AppHeader,
} as Meta<typeof AppHeader>

export const Primary: StoryFn<typeof AppHeader> = () => ({
  components: { AppHeader },
  template: '<AppHeader/>',
})
