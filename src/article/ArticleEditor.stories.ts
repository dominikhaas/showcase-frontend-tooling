import ArticleEditor from './ArticleEditor.vue';

import {Meta, StoryFn} from '@storybook/vue3';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'article/ArticleEditor',
    component: ArticleEditor,
} as Meta<typeof ArticleEditor>;

export const Primary: StoryFn<typeof ArticleEditor> = () => ({
    components: {ArticleEditor},
    template: '<AppFooter/>',
});
