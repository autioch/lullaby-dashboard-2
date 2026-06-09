import { getApps, initializeApp } from 'firebase/app';
import { getFirestore, type QueryDocumentSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

function isFirebaseConfigComplete(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.storageBucket &&
    firebaseConfig.messagingSenderId &&
    firebaseConfig.appId
  );
}

if (!isFirebaseConfigComplete()) {
  throw new Error(
    'Missing required Firebase environment variables. Please set PUBLIC_FIREBASE_API_KEY, PUBLIC_FIREBASE_AUTH_DOMAIN, PUBLIC_FIREBASE_PROJECT_ID, PUBLIC_FIREBASE_STORAGE_BUCKET, PUBLIC_FIREBASE_MESSAGING_SENDER_ID, and PUBLIC_FIREBASE_APP_ID.'
  );
}

export const db = getApps().length
  ? getFirestore()
  : getFirestore(initializeApp(firebaseConfig));

export function withId<T>(document: QueryDocumentSnapshot): WithId<T> {
  return {
    id: document.id,
    ...(document.data() as T),
  };
}

export type WithId<T> = T & { id: string };
