import { collection, onSnapshot, type Unsubscribe } from 'firebase/firestore';
import { db, type WithId, withId } from './db';

type ColorDoc = {
  value: string;
  label: string;
  order: number;
};

export type ColorRec = WithId<ColorDoc>;

export const colorRepository = {
  subscribe(callback: (items: ColorRec[]) => void): Unsubscribe {
    return onSnapshot(collection(db, 'color'), (snapshot) => {
      callback(snapshot.docs.map(withId<ColorRec>));
    });
  },
};
