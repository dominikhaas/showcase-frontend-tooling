<script lang="ts" setup>

import {ref} from "vue";
import ArticleClient, {type ArticleData} from "../client/ArticleClient";
import {useSessionStore} from "../user/sessionStore";
import ArticleEditor from "./ArticleEditor.vue";


const props = defineProps<{
  slug?: string
}>();

const emits = defineEmits<{
  (e: 'saved', result: ArticleData): void;
}>();

const sessionStore = useSessionStore();
const articleData = ref<ArticleData>({});
const isExistingArticle = ref(false);


const save = async (article: ArticleData) => {
  const newArticle = {
    title: article.title ?? "",
    description: article.description ?? "",
    body: article.body ?? "",
    tagList: []
  };

  let result: ArticleData;
  if (isExistingArticle.value) {
    result = await ArticleClient.updateArticle(articleData.value.slug ?? "", {article: newArticle}).promise;
  } else {
    result = await ArticleClient.createArticle({
      article: newArticle
    }).promise;
  }
  emits('saved', result);
}


const initArticle = async (slug: string | undefined = undefined) => {
  //example load time
  await new Promise(r => setTimeout(r, 1000));
  if (!slug) {
    articleData.value = {title: '', description: '', body: ''};
    isExistingArticle.value = false;
  } else {
    articleData.value = await ArticleClient.findArticleBySlug(slug).promise;
    isExistingArticle.value = true;
  }
};

await initArticle(props.slug);
</script>

<template>
  <ArticleEditor :article-data="articleData" :is-existing-article="isExistingArticle"
                 :is-read-only="!useSessionStore().loggedIn"
                 @cancel="$router.back()" @save="save"></ArticleEditor>
</template>
