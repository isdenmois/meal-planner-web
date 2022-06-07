const { writeFileSync } = require('fs')
require('dotenv').config()

const targetPath = './src/shared/config/env-config.ts'

const environmentFileContent = `
export const envConfig = {
   firebaseProjectId: "${process.env.FIREBASE_PROJECT_ID}",
   firebaseApiKey: "${process.env.FIREBASE_API_KEY}",
   firebaseSenderId: "${process.env.FIREBASE_SENDER_ID}",
   firebaseAppId: "${process.env.FIREBASE_APP_ID}",
};
`

writeFileSync(targetPath, environmentFileContent, { encoding: 'utf-8' })
