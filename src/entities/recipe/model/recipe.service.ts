import { Inject, Injectable } from '@angular/core'
import { collection, query, orderBy, Firestore } from 'firebase/firestore'
import { FIREBASE_DB, fromQuery } from 'shared/libs/firebase'
import { Recipe } from './recipe'

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private collection = collection(this.db, 'recipes')
  private listQuery = query(this.collection, orderBy('title'))

  $recipeList = fromQuery<Recipe>(this.listQuery)

  constructor(@Inject(FIREBASE_DB) private db: Firestore) {}
}
