import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db, withId, type WithId } from './db';

type MissionDoc = {
  label: string;
  youtubeUrl: string;
  retentionHours: number;
  objectiveGroupIds: string[];
  // Optional so existing docs hydrate as `freestyle`. `deadlineTime` is only
  // meaningful when `timeMode === 'deadline'`.
  timeMode?: 'freestyle' | 'challenge' | 'deadline';
  deadlineTime?: string; // 'HH:MM', local
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
