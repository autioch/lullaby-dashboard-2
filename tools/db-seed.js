/* eslint-disable @typescript-eslint/no-require-imports */
const admin = require('firebase-admin');
const config = require('./configuration.json');
const serviceAccountKey = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

const db = admin.firestore();

const COLLECTIONS = ['mission', 'objectiveGroup', 'objective', 'color'];

// Delete every doc in a collection so a reseed is idempotent (wipe & reseed).
async function clearCollection(name) {
  const snapshot = await db.collection(name).get();
  const batch = db.batch();
  snapshot.docs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
}

// Seed the colour library and return a hash → colour-id map so objectives can
// be stored by colour id instead of a raw hash.
async function importColors() {
  const valueToColorId = {};

  for (const color of config.colors) {
    const colorRef = await db.collection('color').add({
      label: color.label,
      value: color.value,
      order: color.order,
    });

    valueToColorId[color.value] = colorRef.id;
  }

  return valueToColorId;
}

async function importConfiguration() {
  const valueToColorId = await importColors();

  for (const mission of config.missions) {
    const objectiveGroupIds = [];

    for (const objectiveGroup of mission.objectiveGroups) {
      const objectiveIds = [];

      for (const objective of objectiveGroup.objectives) {
        const colorId = valueToColorId[objective.color];
        if (!colorId) {
          throw new Error(`Unknown objective colour: ${objective.color}`);
        }

        const objectiveRef = await db.collection('objective').add({
          label: objective.label,
          colorId,
          isHidden: false,
        });

        objectiveIds.push(objectiveRef.id);
      }

      const objectiveGroupRef = await db.collection('objectiveGroup').add({
        label: objectiveGroup.id,
        showLabel: false,
        isHidden: false,
        objectiveIds,
      });

      objectiveGroupIds.push(objectiveGroupRef.id);
    }

    await db.collection('mission').add({
      label: mission.label,
      youtubeUrl: mission.youtubeUrl,
      retentionHours: mission.retentionHours,
      objectiveGroupIds,
    });
  }
}

async function seed() {
  for (const name of COLLECTIONS) {
    await clearCollection(name);
  }
  await importConfiguration();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
