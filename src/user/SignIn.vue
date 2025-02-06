<script lang="ts" setup>
import {ref} from "vue";

const props = defineProps<{
  errorText: string
}>();

const emits = defineEmits<{
  (e: 'cancel'): void;
  (e: 'signIn', email: string, password: string): void;
}>();

let email = ref("");
let password = ref("");

const cancel = () => {
  emits('cancel');
}

const signIn = async () => {
  emits('signIn', email.value, password.value);
}
</script>


<template>
  <h2 class="main-heading">Sign in</h2>

  <form>
    <div class="input-section">
      <label for="user-email">E-Mail</label>
      <input id="user-email" v-model="email" name="email" placeholder="Please enter your e-mail address" type="email">
    </div>

    <div class="input-section">
      <label for="user-password">Password</label>
      <input id="user-password" v-model="password" name="password" placeholder="Please enter your password"
             type="password">
    </div>

    <p data-test="error">{{ props.errorText }}</p>

    <div class="form-controls">
      <a href="#" @click.prevent="cancel">cancel</a>
      <button data-test="do-sign-in" type="submit" @click.prevent="signIn">sign in</button>
    </div>
  </form>

</template>
