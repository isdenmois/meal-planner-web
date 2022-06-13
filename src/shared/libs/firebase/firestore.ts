import { InjectionToken } from '@angular/core'
import { Firestore, onSnapshot } from 'firebase/firestore'

export const FIREBASE_DB = new InjectionToken<Firestore>('firebase.db')

export const firestore = {
  onSnapshot,
}
