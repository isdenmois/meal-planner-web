import { FIREBASE_APP, FIREBASE_AUTH } from 'shared/libs/firebase'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from 'shared/config'
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

setPersistence(auth, browserLocalPersistence)

@NgModule({
  declarations: [],
  providers: [
    {
      provide: FIREBASE_APP,
      useValue: app,
    },
    {
      provide: FIREBASE_AUTH,
      useValue: auth,
    },
  ],
  imports: [CommonModule],
})
export class FirebaseModule {}
