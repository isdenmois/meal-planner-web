import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { initializeApp } from 'firebase/app'
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth'
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'

import { firebaseConfig } from 'shared/config'
import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB } from 'shared/libs/firebase'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

setPersistence(auth, browserLocalPersistence)
enableIndexedDbPersistence(db)

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: FIREBASE_APP,
      useValue: app,
    },
    {
      provide: FIREBASE_AUTH,
      useValue: auth,
    },
    {
      provide: FIREBASE_DB,
      useValue: db,
    },
  ],
})
export class FirebaseModule {}
