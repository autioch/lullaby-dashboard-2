// src/repositories/configRepository.ts
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from './db';
import type { Mission } from '@/types';

export type AppConfig = {
  savedLists: Mission[];
};

const CONFIG_DOC = 'dashboard/configuration';

export const configRepository = {
  async fetchOnce(): Promise<AppConfig> {
    const ref = doc(db, CONFIG_DOC);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      throw new Error('Configuration document does not exist');
    }

    return snap.data() as AppConfig;
  },

  subscribe(callback: (config: AppConfig) => void) {
    const ref = doc(db, CONFIG_DOC);

    return onSnapshot(ref, (snap) => {
      if (!snap.exists()) return;
      callback(snap.data() as AppConfig);
    });
  },
};
