import ArticleEditor from './ArticleEditor.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Components/ArticleEditor',
  component: ArticleEditor,
} as Meta<typeof ArticleEditor>

export const CreateArticle: StoryFn<typeof ArticleEditor> = () => ({
  components: { ArticleEditor },
  setup() {
    return {
      articleData: {
        title: '',
        description: '',
        body: '',
      },
      isExistingArticle: false,
      isReadOnly: false,
    }
  },
  template:
    '<ArticleEditor :articleData="articleData" :isExistingArticle="isExistingArticle" :isReadOnly="isReadOnly" />',
})

export const EditArticle: StoryFn<typeof ArticleEditor> = () => ({
  components: { ArticleEditor },
  setup() {
    return {
      articleData: {
        title: 'Existing Article Title',
        description: 'A description of the existing article.',
        body: 'The full body of the existing article.',
      },
      isExistingArticle: true,
      isReadOnly: false,
    }
  },
  template:
    '<ArticleEditor :articleData="articleData" :isExistingArticle="isExistingArticle" :isReadOnly="isReadOnly" />',
})

export const ReadOnlyArticle: StoryFn<typeof ArticleEditor> = () => ({
  components: { ArticleEditor },
  setup() {
    return {
      articleData: {
        title: 'Read-Only Article Title',
        description: 'This article is read-only.',
        body: 'You cannot edit this article.',
      },
      isExistingArticle: true,
      isReadOnly: true,
    }
  },
  template:
    '<ArticleEditor :articleData="articleData" :isExistingArticle="isExistingArticle" :isReadOnly="isReadOnly" />',
})
