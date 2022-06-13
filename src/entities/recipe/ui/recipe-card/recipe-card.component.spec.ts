import { CommonModule } from '@angular/common'
import { NO_ERRORS_SCHEMA } from '@angular/core'

import { fireEvent, render, RenderResult, screen } from '@testing-library/angular'
import userEvent from '@testing-library/user-event'
import { CardModule } from 'primeng/card'

import { Recipe } from 'entities/recipe/model'
import { RecipeCardComponent } from './recipe-card.component'

describe('RecipeCardComponent', () => {
  it('should render recipe card without image', async () => {
    const recipe = {
      id: '1',
      title: 'Recipe example',
    } as Recipe

    await render(RecipeCardComponent, {
      imports: [CardModule],
      componentProperties: { recipe },
      schemas: [NO_ERRORS_SCHEMA],
    })

    expect(screen.getByText(recipe.title)).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('should render recipe card with image', async () => {
    const recipe = {
      id: '1',
      title: 'Recipe example',
      imageURL: 'http://example.com',
    } as Recipe

    await render(RecipeCardComponent, {
      imports: [CardModule],
      componentProperties: { recipe },
      schemas: [NO_ERRORS_SCHEMA],
    })

    const image = screen.getByRole('img')

    expect(screen.getByText(recipe.title)).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', recipe.imageURL)
  })
})
