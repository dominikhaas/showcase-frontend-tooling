<script lang="ts" setup>
import { ref } from 'vue'
import UserClient from '../client/UserClient'
import { useSessionStore } from './sessionStore'
import SignIn from './SignIn.vue'

const emits = defineEmits<{
  (e: 'cancel'): void
  (e: 'showArticles'): void
}>()

const sessionStore = useSessionStore()
const errorText = ref('')

const cancel = () => {
  emits('cancel')
}

const signIn = async (email: string, password: string) => {
  try {
    const result = await UserClient.userLogin({ user: { email: email, password: password } })
      .promise
    errorText.value = ''
    sessionStore.signIn(result.token, result.username)
    emits('showArticles')
  } catch (e) {
    console.log('Sign in failed ', e)
    errorText.value = 'Invalid email address or password'
  }
}
</script>
<template>
  <SignIn :errorText="errorText" @cancel="cancel" @signIn="signIn"></SignIn>
</template>
