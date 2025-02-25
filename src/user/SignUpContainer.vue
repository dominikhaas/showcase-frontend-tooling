<script lang="ts" setup>
import { ref } from 'vue'
import UserClient from '../clientold/UserClient'
import { useSessionStore } from './sessionStore'
import SignUp from './SignUp.vue'

const emits = defineEmits<{
  (event: 'signedUp'): void
  (event: 'cancel'): void
}>()

const errorText = ref('')
const sessionStore = useSessionStore()

const signUp = async (userName: string, email: string, password: string) => {
  try {
    const result = await UserClient.createUser({
      user: {
        username: userName,
        email: email,
        password: password,
      },
    }).promise
    sessionStore.signIn(result.token, result.username)
    emits('signedUp')
  } catch (e) {
    console.error('Signup failed', e)
    errorText.value = 'Failed to signup'
  }
}

const cancel = () => {
  emits('cancel')
}
</script>
<template>
  <SignUp :error-text="errorText" @cancel="cancel" @signUp="signUp"></SignUp>
</template>
