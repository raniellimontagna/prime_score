import { render, screen } from '@testing-library/react'

import { SideBar } from '.'
import { QuantunProvider } from '@quantun/core'

import { theme } from 'styles/theme'

describe('SidebarComponent', () => {
  test('should render', () => {
    render(
      <QuantunProvider theme={theme}>
        <SideBar />
      </QuantunProvider>,
    )

    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })
})
