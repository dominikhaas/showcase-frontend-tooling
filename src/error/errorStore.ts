import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

export const useErrorStore = defineStore('error', () => {
  const error = ref<Error>()

  const resetError = () => {
    error.value = undefined
  }

  const setError = (newError: Error) => {
    error.value = newError
  }

  return { error: readonly(error), resetError, setError }
})
