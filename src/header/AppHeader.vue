<script lang="ts" setup>

import {useSessionStore} from "../user/sessionStore";
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

const sessionStore = useSessionStore();
const router = useRouter();

const navigateToStart = () => {
  router.push('/articles');
}
const signOut = () => {
  sessionStore.signOut();
  router.push('/articles');
}

const {t} = useI18n();

console.log(t);
</script>

<template>
  <header class="app-header">
    <h1 role="heading" @click="navigateToStart">{{ t('header.text') }}
    </h1>
    <div class="header-controls">
      <template v-if="sessionStore.loggedIn">
        <a data-test="signout" href="#" @click.prevent="signOut">{{ t('header.signOut') }}</a>
      </template>
      <template v-else>
        <router-link data-test="signin" to="/signin">{{ t('header.signIn') }}</router-link>
        or
        <router-link data-test="signup" to="/signup">{{ t('header.signUp') }}</router-link>
      </template>
    </div>
  </header>
</template>
