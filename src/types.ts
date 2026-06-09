export type Objective = {
  id: string;
  label: string;
  color: string;
};

export type ObjectiveGroup = {
  id: string;
  label: string;
  items: Objective[];
};

export type Mission = {
  label: string;
  id: string;
  youtubeUrl: string;
  groups: ObjectiveGroup[];
  retentionHours?: number;
};
