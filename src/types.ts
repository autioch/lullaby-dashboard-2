export type ToDoItem = {
  id: string;
  name: string;
  color: string;
};

export type ToDoGroup = {
  id: string;
  items: ToDoItem[];
};

export type SavedList = {
  label: string;
  id: string;
  youtubeUrl: string;
  groups: ToDoGroup[];
  retentionHours?: number;
};

export type TimerRunState = {
  listId: string;
  startedAtMs: number;
  elapsedMs: number;
  isRunning: boolean;
  lastResumedAtMs: number | null;
  completedAtMs: number | null;
};

export type FastestRunRecord = {
  elapsedMs: number;
  completedAtMs: number;
};

export type CelebrationState = {
  visible: boolean;
  listId: string | null;
  isNewBest: boolean;
  elapsedMs: number;
};

export type Configuration = {
  savedLists: SavedList[];
};

export type ApiResponseAuth = {
  ok: boolean;
  error?: string;
};
