import { render, screen } from '@testing-library/angular'
import { Recipe, RecipeService, RecipeCardComponent, RecipeModule } from 'entities/recipe'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { Subject } from 'rxjs'

import { HomePageComponent } from './home-page.component'

describe('HomePage', () => {
  it('should render the recipe list', async () => {
    const $recipeList = new Subject<Recipe[]>()
    const recipes = [
      { id: '1', title: 'First recipe' },
      { id: '1', title: 'Second recipe' },
    ] as Recipe[]

    await render(HomePageComponent, {
      imports: [ProgressSpinnerModule, RecipeModule],
      providers: [{ provide: RecipeService, useValue: { $recipeList } }],
    })

    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    $recipeList.next({ isLoading: false, data: recipes } as any)

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    expect(screen.getByText(recipes[0].title)).toBeInTheDocument()
    expect(screen.getByText(recipes[1].title)).toBeInTheDocument()
  })
})
