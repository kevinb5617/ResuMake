/* eslint-disable react/jsx-filename-extension */
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Homepage from './Homepage'

it('finds "Get Started" button', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Homepage />
    </Router>,
  )
})
