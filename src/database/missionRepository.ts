import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db, withId, type WithId } from './db';

export type MissionDoc = {
  label: string;
  youtubeUrl: string;
  retentionHours: number;
  objectiveGroupIds: string[];
};

export type MissionRec = WithId<MissionDoc>;

export const missionRepository = {
  async fetchOnce(callback: (items: MissionRec[]) => void) {
    const snapshot = await getDocs(collection(db, 'mission'));

    callback(snapshot.docs.map(withId<MissionRec>));
  },
  subscribe(callback: (items: MissionRec[]) => void) {
    return onSnapshot(collection(db, 'mission'), (snapshot) =>
      callback(snapshot.docs.map(withId<MissionRec>))
    );
  },
};
