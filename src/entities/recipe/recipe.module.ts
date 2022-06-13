import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardModule } from 'primeng/card'
import { RecipeCardComponent } from './ui'
import { RecipeService } from './model'

@NgModule({
  imports: [CommonModule, CardModule],
  exports: [RecipeCardComponent],
  declarations: [RecipeCardComponent],
  providers: [RecipeService],
})
export class RecipeModule {}
