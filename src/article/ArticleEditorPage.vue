<script lang="ts" setup>

import ArticleEditorContainer from "./ArticleEditorContainer.vue";
import {useRoute, useRouter} from "vue-router";
import {ArticleData} from "../client/ArticleClient";

const props = defineProps<{
  id?: string
}>();


const router = useRouter();
const route = useRoute()

const onSaved = (updatedArticle: ArticleData) => {
  router.push("/article/" + updatedArticle.slug);
}

</script>

<template>
  <suspense>
    <template #default>
      <ArticleEditorContainer :slug="id" @saved="onSaved"/>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </suspense>
</template>
