export type MissionHistoryEntry = {
  missionId: string;
  startedAt: string;
  completedAt: string;
  durationSeconds: number;
};

export type MissionRecord = {
  missionId: string;
  bestDurationSeconds: number;
};

export type Mission = {
  id: string;
  name: string;
  theme: string;
  stateRetentionHours?: number;
};

export type Objective = {
  id: string;
  label: string;
  estimatedDurationMinutes?: number;
};

export type MissionState = {
  missionId: string;
  startedAt: string | null;
  completedAt: string | null;
  completedObjectives: string[];
};

export type ThemeDefinition = {
  id: string;
  name: string;

  labels: {
    objectives: string;
    completed: string;
    remaining: string;
  };

  messages: {
    start: string;
    quarter: string;
    half: string;
    threeQuarter: string;
    final: string;
    completed: string;
  };

  assets: {
    backgroundImage?: string;
    iconSet?: string;
    soundPack?: string;
  };
};
