<script lang="ts" setup>
import SignInContainer from './SignInContainer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cancel = () => {
  router.back()
}

const showArticles = () => {
  router.push('/articles')
}
</script>

<template>
  <SignInContainer @cancel="cancel" @showArticles="showArticles"></SignInContainer>
</template>
