// Fail fast before dev/build/preview if required env is missing or malformed —
// otherwise the client SDK throws at load and the API routes fail at runtime.
const requiredClientKeys = [
  'PUBLIC_FIREBASE_API_KEY',
  'PUBLIC_FIREBASE_AUTH_DOMAIN',
  'PUBLIC_FIREBASE_PROJECT_ID',
  'PUBLIC_FIREBASE_STORAGE_BUCKET',
  'PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'PUBLIC_FIREBASE_APP_ID',
];

// Server-only vars the API routes need (firebase-admin + the auth gate).
const requiredServerKeys = ['FIREBASE_SERVICE_ACCOUNT_KEY', 'APP_PASSWORD'];

const missingKeys = [...requiredClientKeys, ...requiredServerKeys].filter(
  (key) => !process.env[key]?.trim()
);

if (missingKeys.length > 0) {
  console.error(
    'Missing required environment variables:',
    missingKeys.join(', ')
  );
  console.error('Please add these values to your .env file before building.');
  process.exit(1);
}

// The service account is consumed as JSON by firebase-admin (src/pages/api,
// tools/db-seed.mjs). Catch a malformed value here instead of at runtime.
try {
  JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
} catch {
  console.error('FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON.');
  process.exit(1);
}

console.log('Firebase environment variables are present.');
