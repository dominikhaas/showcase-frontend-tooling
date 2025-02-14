import { test, expect } from './e2e-base'

test('Open articles page and verify multiple articles exist', async ({ articlesPage }) => {
  // Open the articles page
  await articlesPage.open()

  // Get all articles
  const articles = await articlesPage.getArticles()

  // Assert that there is more than one article
  expect(articles.length).toBeGreaterThan(1)
})
