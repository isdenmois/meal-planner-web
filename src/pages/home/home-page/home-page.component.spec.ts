import { render, screen, fireEvent } from '@testing-library/angular'

import { HomePageComponent } from './home-page.component'

describe('HomePage', () => {
  it('should render the component', async () => {
    await render(HomePageComponent)

    expect(screen.getByText('home-page works!')).toBeInTheDocument()
  })
})
