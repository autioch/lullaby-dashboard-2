import { collection, onSnapshot, type Unsubscribe } from 'firebase/firestore';
import { db, type WithId, withId } from './db';

export type ObjectiveGroupDoc = {
  label: string;
  isHidden: boolean;
  objectiveIds: string[];
};

export type ObjectiveGroupRec = WithId<ObjectiveGroupDoc>;

export const objectiveGroupRepository = {
  subscribe(callback: (items: ObjectiveGroupRec[]) => void): Unsubscribe {
    return onSnapshot(collection(db, 'objectiveGroup'), (snapshot) => {
      callback(snapshot.docs.map(withId<ObjectiveGroupRec>));
    });
  },
};
