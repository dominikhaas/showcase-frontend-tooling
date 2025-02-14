import { expect, test } from 'vitest'

import { render, screen } from '@testing-library/vue'
import AppFooter from './AppFooter.vue'

test('test article editor', async () => {
  // The `render` method renders the component into the document.
  // It also binds to `screen` all the available queries to interact with
  // the component.
  render(AppFooter)

  // queryByText returns the first matching node for the provided text
  // or returns null.
  expect(screen.getByTestId('footer-text').textContent).toEqual('Goodbye world')
})
