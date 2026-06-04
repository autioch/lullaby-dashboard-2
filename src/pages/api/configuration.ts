import fs from "node:fs/promises";
import path from "node:path";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const prerender = false;

const serviceAccountKeyPath =
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH ?? "service-account.json";

function getServiceAccount() {
  const serviceAccountPath = path.resolve(serviceAccountKeyPath);

  return fs.readFile(serviceAccountPath, "utf8").then((content) => {
    const parsed = JSON.parse(content);

    if (!parsed || typeof parsed !== "object") {
      throw new Error("Firebase service account is invalid");
    }

    return parsed;
  });
}

async function getFirestoreDb() {
  if (!getApps().length) {
    const serviceAccount = await getServiceAccount();

    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getFirestore();
}

export async function GET() {
  try {
    const db = await getFirestoreDb();
    const snapshot = await db
      .collection("dashboard")
      .doc("configuration")
      .get();

    if (!snapshot.exists) {
      return new Response(
        JSON.stringify({ error: "Configuration document not found" }),
        {
          status: 404,
          headers: { "content-type": "application/json" },
        },
      );
    }

    const data = snapshot.data() as { savedLists?: unknown } | undefined;

    if (!data || !Array.isArray(data.savedLists)) {
      return new Response(
        JSON.stringify({ error: "Configuration is missing savedLists" }),
        {
          status: 500,
          headers: { "content-type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ savedLists: data.savedLists }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    return new Response(
      JSON.stringify({
        error: "Failed to load configuration",
        details: message,
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      },
    );
  }
}
