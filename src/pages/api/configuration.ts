import { getFirestoreDb, jsonResponse } from './_utils';

export const prerender = false;

export async function GET() {
  try {
    const snapshot = await getConfiguration();

    if (!snapshot.exists) {
      return jsonResponse({ error: 'Configuration document not found' }, 404);
    }

    const data = snapshot.data() as { savedLists?: unknown } | undefined;

    if (!data || !Array.isArray(data.savedLists)) {
      return jsonResponse(
        { error: "Configuration is missing savedLists or it's not an array" },
        500
      );
    }

    return jsonResponse({ savedLists: data.savedLists });
  } catch (error) {
    return jsonResponse(
      {
        error: 'Failed to load configuration',
        details: error instanceof Error ? error.message : String(error),
      },
      500
    );
  }
}

async function getConfiguration() {
  const db = await getFirestoreDb();
  const snapshot = await db.collection('dashboard').doc('configuration').get();

  return snapshot;
}
