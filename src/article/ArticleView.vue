<script lang="ts" setup>

import {ArticleData} from "../client/ArticleClient";

const props = defineProps<{
  loggedIn: boolean
  articleData: ArticleData
}>();

const emits = defineEmits<{
  (e: 'edit', slug: string): void;
  (e: 'delete', slug: string): void;
  (e: 'cancel'): void;
}>();

const edit = () => {
  emits('edit', props.articleData.slug as string);
}

const del = () => {
  emits('delete', props.articleData.slug as string);
}

const cancel = () => {
  emits('cancel');
}

</script>

<template>
  <h2 class="main-heading">{{ props.articleData.title }}</h2>

  <div class="author-controls">
    <button v-if="props.loggedIn" @click="edit">edit</button>
    <button v-if="props.loggedIn" @click="del">delete</button>
    <a href="#" @click.prevent="cancel">Cancel</a>
  </div>

  <article class="single-article">
    <aside>von {{ props.articleData?.author?.username }} ({{ props.articleData?.updatedAt }})</aside>
    <div class="description">
      <p>{{ props.articleData?.description }}</p>
    </div>
    <div class="body">
      <p>{{ props.articleData?.body }}</p>
    </div>
  </article>

</template>
