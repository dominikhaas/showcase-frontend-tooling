import {render, screen} from '@testing-library/vue'
import { expect, test } from 'vitest'
import AppHeader from '../AppHeader.vue'
import { createPinia } from 'pinia'
import router from '../../router'


test('Header renders correctly and contains the title', async () => {

  render(AppHeader, {
    global: {
      plugins: [createPinia(),  router]
    },
  })

  //check rendering is done correctly
  expect(screen.getByRole('heading').textContent).toBe("QArticles");
})
