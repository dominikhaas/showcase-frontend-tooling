<script lang="ts" setup>
import { ref } from 'vue'
import ArticleClient, { ArticleData } from '../clientold/ArticleClient'
import { useSessionStore } from '../user/sessionStore'
import ArticleView from './ArticleView.vue'
import { type Article, getArticle } from '@/client'

const props = defineProps<{
  slug: string
}>()

const emits = defineEmits<{
  (e: 'edit', slug: string): void
  (e: 'showArticles'): void
}>()

const sessionStore = useSessionStore()
const articleData = ref<Article>({})

const editArticle = async () => {
  emits('edit', articleData.value.slug as string)
}

const deleteArticle = async () => {
  await ArticleClient.deleteArticle(articleData.value.slug as string)
  emits('showArticles')
}

const cancel = () => {
  console.log('arch view container cancel')
  emits('showArticles')
}

const initArticle = async (slug: string) => {
  //example load time
  const articleResponse = await getArticle({path: {slug: slug}});
  articleData.value = articleResponse.data.article;
}

await initArticle(props.slug)
</script>

<template>
  <ArticleView
    :article-data="articleData"
    :logged-in="sessionStore.loggedIn"
    @cancel="cancel"
    @delete="deleteArticle"
    @edit="editArticle"
  ></ArticleView>
</template>
