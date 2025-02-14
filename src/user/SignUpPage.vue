<script lang="ts" setup>
import { useRouter } from 'vue-router'
import SignUpContainer from './SignUpContainer.vue'

const router = useRouter()

const signedUp = () => {
  router.push('/articles')
}

const cancel = () => {
  router.back()
}
</script>
<template>
  <SignUpContainer @cancel="cancel" @signedUp="signedUp"></SignUpContainer>
</template>
