<script lang="ts" setup>
import ArticleListContainer from './ArticleListContainer.vue'
</script>

<template>
  <suspense>
    <template #default>
      <ArticleListContainer />
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </suspense>
</template>
