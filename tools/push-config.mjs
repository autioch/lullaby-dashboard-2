import fs from 'node:fs/promises';
import path from 'node:path';
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
const configurationFilePath =
  process.env.CONFIGURATION_FILE_PATH ?? 'public/configuration.json';
const collectionName = process.env.FIRESTORE_COLLECTION ?? 'dashboard';
const documentName = process.env.FIRESTORE_DOCUMENT ?? 'configuration';

if (!serviceAccountKey) {
  console.error('Missing FIREBASE_SERVICE_ACCOUNT_KEY environment variable.');
  process.exit(1);
}

try {
  const serviceAccount = JSON.parse(serviceAccountKey);

  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  const db = getFirestore();
  const configJson = await fs.readFile(
    path.resolve(configurationFilePath),
    'utf8'
  );
  const configuration = JSON.parse(configJson);

  if (!configuration || !Array.isArray(configuration.savedLists)) {
    throw new Error(
      `Invalid configuration file: ${configurationFilePath} must contain a savedLists array`
    );
  }

  const configurationRef = db.collection(collectionName).doc(documentName);

  await configurationRef.set({ savedLists: configuration.savedLists });

  console.log(
    `Firebase config injected to ${collectionName}/${documentName} successfully.`
  );
} catch (error) {
  console.error('Failed to inject configuration into Firebase:', error);
  process.exit(1);
}
