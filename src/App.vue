<script lang="ts" setup>
import AppHeader from './header/AppHeader.vue'
import AppFooter from './footer/AppFooter.vue'
import { useSessionStore } from './user/sessionStore'
import { onErrorCaptured } from 'vue'
import { useErrorStore } from './error/errorStore'
import { useRouter } from 'vue-router'

const sessionStore = useSessionStore()
const errorStore = useErrorStore()
const router = useRouter()

if (!sessionStore.loggedIn) {
  const token = window.sessionStorage.getItem('token')
  const username = window.sessionStorage.getItem('username')

  if (token! && username!) {
    sessionStore.signIn(token, username)
  }
}

onErrorCaptured((error) => {
  console.log('ogt an error')
  errorStore.setError(error)
  router.push('/error')
})
</script>

<template>
  <AppHeader />

  <main class="app-main">
    <router-view></router-view>
  </main>

  <AppFooter />
</template>
