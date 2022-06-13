import { InjectionToken } from '@angular/core'
import { Auth, signInWithEmailAndPassword } from 'firebase/auth'

export const FIREBASE_AUTH = new InjectionToken<Auth>('firebase.auth')

export const firebaseAuth = {
  signInWithEmailAndPassword,
}
