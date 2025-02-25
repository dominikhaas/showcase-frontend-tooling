<script lang="ts" setup>
import { zNewUser } from '../client/zod.gen.ts'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import type { NewUser } from '../client/types.gen.ts'

const props = defineProps<{
  errorText: string
}>()

//setup validation with vee validate
const validationSchema = toTypedSchema(zNewUser)
const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: username } = useField('username')
const { value: email } = useField('email')
const { value: password } = useField('password')

const emit = defineEmits<{
  signUp: [newUser: NewUser]
  cancel: []
}>()

const onSubmit = handleSubmit((values) => {
  emit('signUp', values as NewUser)
})

const cancel = () => {
  emit('cancel')
}
</script>

<template>
  <h2 class="main-heading">Sign up</h2>
  <form @submit="onSubmit">
    <div class="input-section">
      <label for="user-name">Name</label>
      <input v-model="username" name="username" placeholder="Please enter your name" type="text" />
      <span class="error">{{ errors.username }}</span>
    </div>

    <div class="input-section">
      <label for="user-email">E-Mail</label>
      <input
        id="user-email"
        v-model="email"
        name="email"
        placeholder="Please enter your e-mail address"
        type="email"
      />
      <span class="error">{{ errors.email }}</span>
    </div>

    <div class="input-section">
      <label for="user-password">Password</label>
      <input
        id="user-password"
        v-model="password"
        name="password"
        placeholder="Please enter your password"
        type="password"
      />
      <span class="error">{{ errors.password }}</span>
    </div>

    <p class="error">{{ props.errorText }}</p>

    <div class="form-controls">
      <a href="#" @click.prevent="cancel">cancel</a>
      <button>sign up</button>
    </div>
  </form>
</template>

<style>
.error {
  color: red;
  margin: 1em 0;
}
</style>
