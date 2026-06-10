/* eslint-disable @typescript-eslint/no-require-imports */
const admin = require('firebase-admin');
const config = require('./configuration.json');
const serviceAccountKey = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

const db = admin.firestore();

async function importConfiguration() {
  for (const mission of config.missions) {
    const objectiveGroupIds = [];

    for (const objectiveGroup of mission.objectiveGroups) {
      const objectiveIds = [];

      for (const objective of objectiveGroup.objectives) {
        const objectiveRef = await db.collection('objective').add({
          label: objective.label,
          color: objective.color,
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

importConfiguration().catch((e) => {
  console.error(e);
  process.exit(1);
});
