import { FirebaseOptions } from 'firebase/app'
import { envConfig } from './env-config'

const { firebaseProjectId: projectId } = envConfig

export const firebaseConfig: FirebaseOptions = {
  apiKey: envConfig.firebaseApiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId: envConfig.firebaseSenderId,
  appId: envConfig.firebaseAppId,
}
