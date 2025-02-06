<script lang="ts" setup>

import ArticleViewContainer from "./ArticleViewContainer.vue";
import {useRouter} from "vue-router";

const router = useRouter();


const props = defineProps<{
  id: string
}>();

const editArticle = async (slug: string) => {
  router.push('/edit-article/' + slug);
}

const showArticles = async () => {
  router.push("/articles")
}



</script>

<template>
  <suspense>
    <template #default>
      <ArticleViewContainer :slug="props.id" @edit="editArticle" @showArticles="showArticles"/>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </suspense>
</template>
