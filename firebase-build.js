const fs = require('fs')

const envs = [
    'GATSBY_FIREBASE_API_KEY',
    'GATSBY_FIREBASE_AUTH_DOMAIN',
    'GATSBY_FIREBASE_DATABASE_URL',
    'GATSBY_FIREBASE_PROJECT_ID',
    'GATSBY_FIREBASE_STORAGE_BUCKET',
    'GATSBY_FIREBASE_MESSAGING_SENDER_ID',
    'GATSBY_FIREBASE_APP_ID',
    'GATSBY_FIREBASE_MEASUREMENT_ID',
    'GA_TRACKING_ID'
]

const data = fs.readFileSync('gatsby-config.deploy.js', 'utf-8')
const newValue = envs.reduce((acc, env) => {
    acc = acc.replace(`{{${env}}}`, process.env[env])
    return acc;
}, data);

fs.writeFileSync('gatsby-config.js', newValue, 'utf-8')

console.log('readFileSync complete')

