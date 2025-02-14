import { test as base, expect, Page } from '@playwright/test'

// 1. Create a custom test fixture
// This fixture will initialize page objects and make them available in tests.
class StartPage {
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  // Opens the start page
  async open(): Promise<void> {
    await this.page.goto('http://localhost:5173/')
  }
}

interface Article {
  headline: string
  click: () => Promise<void>
}

class ArticlesPage {
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  // Asserts that the URL ends with `/articles`
  public async isActive(): Promise<boolean> {
    try {
      await this.page.waitForURL(/\/articles$/)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  // Opens the articles page
  async open(): Promise<void> {
    await this.page.goto('http://localhost:5173/articles')
    await this.page.waitForSelector('text=Loading...', { state: 'hidden' })
  }

  // Retrieves articles with `data-testid="headline"` and provides click functionality
  async getArticles(): Promise<Article[]> {
    const elements = await this.page.$$('[data-test="headline"]')
    return Promise.all(
      elements.map(async (element) => {
        const headline = (await element.textContent()) || ''
        return {
          headline,
          click: async () => {
            await element.click()
          },
        }
      }),
    )
  }
}

// Extend the base test with page objects
const test = base.extend<{ startPage: StartPage; articlesPage: ArticlesPage }>({
  startPage: async ({ page }, use) => {
    const startPage = new StartPage(page)
    await use(startPage)
  },
  articlesPage: async ({ page }, use) => {
    const articlesPage = new ArticlesPage(page)
    await use(articlesPage)
  },
})

// Export the custom test for reuse in test files
export { test, expect, StartPage, ArticlesPage }
