import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { RecipeModule } from 'entities/recipe/recipe.module'
import { HomePageComponent } from './home-page/home-page.component'

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RecipeModule, ProgressSpinnerModule],
})
export class HomeModule {}
