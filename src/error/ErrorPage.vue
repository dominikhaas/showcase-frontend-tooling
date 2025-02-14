<script lang="ts" setup>
import { useErrorStore } from './errorStore'
import { useRouter } from 'vue-router'

const errorStore = useErrorStore()
const router = useRouter()

const back = () => {
  errorStore.resetError()
  router.back()
}
</script>

<template>
  <h2 class="main-heading">Error</h2>
  <div>There was an error</div>
  <div>
    <div>Error:</div>
    <div>{{ errorStore.error }}</div>
  </div>
  <a href="#" @click="back">Back</a>
</template>
