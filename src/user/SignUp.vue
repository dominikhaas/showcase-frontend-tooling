<script lang="ts" setup>
import {ref} from "vue";

const props = defineProps<{
  errorText: string
}>();

const emits = defineEmits<{
  (event: 'signUp', userName: string, email: string, password: string): void;
  (event: 'cancel'): void;
}>();

let userName = ref("");
let email = ref("");
let password = ref("");

const cancel = () => {
  emits('cancel');
}

const signUp = async () => {
  emits('signUp', userName.value, email.value, password.value);
}
</script>

<template>
  <h2 class="main-heading">Sign up</h2>
  <form>
    <div class="input-section">
      <label for="user-name">Name</label>
      <input id="user-name" v-model="userName" name="user" placeholder="Please enter your name" type="text">
    </div>

    <div class="input-section">
      <label for="user-email">E-Mail</label>
      <input id="user-email" v-model="email" name="email" placeholder="Please enter your e-mail address" type="email">
    </div>

    <div class="input-section">
      <label for="user-password">Password</label>
      <input id="user-password" v-model="password" name="password" placeholder="Please enter your password"
             type="password">
    </div>

    <p>{{ props.errorText }}</p>

    <div class="form-controls">
      <a href="#" @click.prevent="cancel">cancel</a>
      <button data-test="do-sign-up" type="submit" @click.prevent="signUp">sign up</button>
    </div>
  </form>
</template>
