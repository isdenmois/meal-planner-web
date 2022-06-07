import { InjectionToken } from '@angular/core'
import { FirebaseApp } from 'firebase/app'
import { Auth, signInWithEmailAndPassword } from 'firebase/auth'

export const FIREBASE_APP = new InjectionToken<FirebaseApp>('firebase.app')
export const FIREBASE_AUTH = new InjectionToken<Auth>('firebase.auth')

export const firebaseAuth = {
  signInWithEmailAndPassword,
}
