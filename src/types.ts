export interface ToDoItem {
  id: string;
  name: string;
  color: string;
}

export interface ToDoGroup {
  id: string;
  items: ToDoItem[];
}

export interface SavedList {
  label: string;
  id: string;
  bgColor: string;
  youtubeUrl: string;
  groups: ToDoGroup[];
  retentionHours?: number;
}

export interface TimerRunState {
  listId: string;
  startedAtMs: number;
  elapsedMs: number;
  isRunning: boolean;
  lastResumedAtMs: number | null;
  completedAtMs: number | null;
}

export interface FastestRunRecord {
  elapsedMs: number;
  completedAtMs: number;
}

export interface CelebrationState {
  visible: boolean;
  listId: string | null;
  isNewBest: boolean;
  elapsedMs: number;
}

export interface Configuration {
  savedLists: SavedList[];
}
