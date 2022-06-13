import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Recipe, RecipeService } from 'entities/recipe'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = []
  isLoading: boolean = true

  private subscription!: Subscription

  constructor(private recipeService: RecipeService, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.subscription = this.recipeService.$recipeList.subscribe(({ data, isLoading }) => {
      this.recipes = data
      this.isLoading = isLoading
      this.cdr.detectChanges()
    })
  }

  recipeTrack(index: number, recipe: Recipe) {
    return recipe.id
  }

  openRecipe(recipe: Recipe) {
    // TODO: go to the recipe page
    this.router.navigate([''])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
