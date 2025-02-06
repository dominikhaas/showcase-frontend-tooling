import { render, screen } from '@testing-library/vue'
import { describe, expect, test, vi } from 'vitest'
import ArticleViewPage from '../ArticleViewPage.vue'
import { createPinia } from 'pinia'
import router from '../../router'
import { mount } from '@vue/test-utils'
import { waitFor } from '../../__tests__/util/waitFor.ts'

describe('ArticleViewPage', () => {
  /**
   * Sample test for using @testing-library/vue
   */
  test('Shows loading spinner', async () => {
    render(ArticleViewPage, {
      props: {
        id: '0815',
      },
      global: {
        plugins: [createPinia(), router],
      },
    })

    //check rendering is done correctly
    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  /**
   * Sample test for @vue/test-utils
   * ATTENTION: testing-library did not work with async components and suspense!
   * As of now (23.12.2024) this seems to be a known issue - https://vuejs.org/guide/scaling-up/testing.html
   */
  test('Load and render articles', async () => {
    vi.mock('axios', () => ({
      default: {
        get: vi.fn().mockResolvedValue({
          data: {
            article: {
              id: 'd2d3b837-4acf-45bc-939b-f8e752583890',
              slug: 'test3',
              title: 'test3',
              description: 'a',
              body: 'a',
              favorited: false,
              favoritesCount: 0,
              createdAt: '2022-11-22T09:33:13.518Z',
              updatedAt: '2022-11-22T09:33:13.518Z',
              tagList: [],
              cursor: {
                data: '2022-11-22T09:33:13.518Z',
              },
              author: {
                username: 'Tom',
                bio: '',
                image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
                following: false,
              },
            },
          },
        }),
        CancelToken: {
          source: vi.fn().mockReturnValue({
            token: 'mockToken',
            cancel: vi.fn(),
          }),
        },
      },
    }))

    const wrapper = mount(ArticleViewPage, {
      props: {
        id: '0815',
      },
      global: {
        plugins: [createPinia(), router], // Hier solltest du den Router eventuell mocken, falls er benötigt wird
      },
    })

    await waitFor(() => wrapper.text().includes('test3'))

    // Überprüfen, ob das Element existiert
    const heading = wrapper.find('h2')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('test3')
  })
})
