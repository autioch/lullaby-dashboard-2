import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export function jsonResponse(data: unknown, status: number = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function getServiceAccountKey() {
  const key = import.meta.env.FIREBASE_SERVICE_ACCOUNT_KEY?.trim() ?? "";
  const serviceAccount = JSON.parse(key);

  if (!serviceAccount || typeof serviceAccount !== "object") {
    throw new Error("Firebase service account is invalid");
  }

  return serviceAccount;
}

export async function getFirestoreDb() {
  if (!getApps().length) {
    const serviceAccount = getServiceAccountKey();

    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getFirestore();
}
