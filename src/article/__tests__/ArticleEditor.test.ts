import { render, screen, fireEvent } from '@testing-library/vue'
import ArticleEditor from '../ArticleEditor.vue'
import { expect, test } from 'vitest'
import type { ArticleData } from '../../clientold/ArticleClient'

test('Saving sends the edited article', async () => {
  const sampleArticleData: ArticleData = {
    title: 'My title',
  }
  const { emitted } = render(ArticleEditor, {
    props: {
      articleData: sampleArticleData,
      isExistingArticle: true,
      isReadOnly: false,
    },
  })

  //check rendering is done correctly
  expect(screen.queryByText('Edit Article')).toBeTruthy()

  //click the save button
  const button = screen.getByText('Save')
  await fireEvent.click(button)

  //check that the event was sent and the payload contains the article
  expect(emitted()['save']).toBeTruthy()
  const payload = emitted()['save'][0]
  expect(payload).toEqual([sampleArticleData])
})
