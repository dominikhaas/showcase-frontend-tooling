<script lang="ts" setup>
import type {ArticleData} from "../client/ArticleClient";
import {useI18n} from "vue-i18n";
import { ref } from 'vue'
import { logArticle } from '@/client/SampleCycleMaker2k.ts'

const props = defineProps<{
  articleData: ArticleData,
  isExistingArticle: boolean,
  isReadOnly: boolean
}>();

const emits = defineEmits<{
  (e: 'save', article: ArticleData): void;
  (e: 'cancel'): void;
}>();

const {t} = useI18n();

const article = ref<ArticleData>(JSON.parse(JSON.stringify(props.articleData)));
logArticle(article.value);

const cancel = () => {
  emits('cancel');
}

const save = () => {
  emits('save', article.value)
}
</script>

<template>
  <h2 v-if="props.isExistingArticle" class="main-heading">{{ t('editArticle') }}</h2>
  <h2 v-else class="main-heading">{{ t('createArticle') }}</h2>

  <article class="edit-article">
    <form>

      <div class="input-section">
        <label for="article-title-input">{{ t('title') }}</label>
        <input id="article-title-input" v-model="article.title" :disabled="props.isReadOnly" name="title"
               type="text"
               v-bind:placeholder="t('title')">
      </div>

      <div class="input-section">
        <label for="article-description-input">{{ t('description') }}</label>
        <textarea id="article-description-input" v-model="article.description"
                  :disabled="props.isReadOnly"
                  name="article-description-input" rows="4"></textarea>
      </div>

      <div class="input-section">
        <label for="article-body-input">{{ t('body') }}</label>
        <textarea id="article-body-input" v-model="article.body" :disabled="props.isReadOnly"
                  name="article-body-input"
                  rows="25"></textarea>
      </div>

      <div v-if="!props.isReadOnly" class="form-controls">
        <a href="#" @click.prevent="cancel">{{ t('cancel') }}</a>
        <button type="submit" @click.prevent="save">{{ t('save') }}</button>
      </div>
    </form>
  </article>

</template>

<i18n>
{
  "en": {
    "editArticle": "Edit Article",
    "createArticle": "Create Article",
    "title": "Title",
    "description": "Description",
    "body": "Body",
    "cancel": "Cancel",
    "save": "Save"
  }
}
</i18n>
