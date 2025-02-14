import { test, expect } from './e2e-base'

test('Start page redirects to articles', async ({ startPage, articlesPage }) => {
  await startPage.open()
  expect(await articlesPage.isActive()).toBeTruthy()
})
