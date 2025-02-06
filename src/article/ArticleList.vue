<script lang="ts" setup>
import {ArticleData} from "../client/ArticleClient";

const props = defineProps<{
  loggedIn: boolean,
  articles: ArticleData[]
}>();

const emits = defineEmits<{
  (e: 'createArticle'): void;
}>();

const newArticle = () => {
  emits('createArticle');
}
</script>

<template>
  <h2 class="main-heading">Articles</h2>

  <div v-if="props.loggedIn" class="author-controls">
    <button @click="newArticle">new article</button>
  </div>

  <ul class="articles-list">
    <li v-for="article in props.articles">
      <article data-test="article">
        <header>
          <h3 data-test="headline">
            <router-link :to="'/article/' + article.slug">{{ article.title }}</router-link>
          </h3>
        </header>
        <aside>von {{ article.author?.username }} ({{ article.createdAt }})</aside>
        <div class="description">{{ article.description }}</div>
      </article>
    </li>
  </ul>
</template>
