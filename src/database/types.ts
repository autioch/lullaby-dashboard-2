export type MissionDocument = {
  label: string;
  youtubeUrl: string;
  retentionHours: number;
  objectiveGroupIds: string[];
};

export type ObjectiveGroupDocument = {
  label: string;
  isHidden: boolean;
  objectiveIds: string[];
};

export type ObjectiveDocument = {
  label: string;
  color: string;
  isHidden: boolean;
};
