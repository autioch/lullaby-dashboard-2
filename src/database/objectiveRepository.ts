import { collection, onSnapshot, type Unsubscribe } from 'firebase/firestore';
import { db, type WithId, withId } from './db';

export type ObjectiveDoc = {
  label: string;
  colorId: string;
  isHidden: boolean;
};

export type ObjectiveRec = WithId<ObjectiveDoc>;

export const objectiveRepository = {
  subscribe(callback: (items: ObjectiveRec[]) => void): Unsubscribe {
    return onSnapshot(collection(db, 'objective'), (snapshot) => {
      callback(snapshot.docs.map(withId<ObjectiveRec>));
    });
  },
};
