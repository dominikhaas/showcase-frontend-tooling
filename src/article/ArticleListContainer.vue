<script lang="ts" setup>

import {useSessionStore} from "../user/sessionStore";
import {ref} from "vue";
import ArticleClient, {ArticleData} from "../client/ArticleClient";
import ArticleList from "./ArticleList.vue";
import {useRouter} from "vue-router";

const sessionStore = useSessionStore();
const articles = ref<ArticleData[]>([]);
const router = useRouter();

const createArticle = () => {
  router.push('/create-article')
}

const loadArticles = async () => {
  //example load time
  await new Promise(r => setTimeout(r, 2000));

  try {
    articles.value = (await ArticleClient.getArticles().promise).articles;
  } catch (e) {
    console.error("Couldn't load articles");
  }
}

await loadArticles();
</script>

<template>
  <ArticleList :articles="articles" :logged-in="sessionStore.loggedIn" @createArticle="createArticle"></ArticleList>
</template>
