export type Objective = {
  id: string;
  name: string;
  color: string;
};

export type ObjectiveGroup = {
  id: string;
  items: Objective[];
};

export type Mission = {
  label: string;
  id: string;
  youtubeUrl: string;
  groups: ObjectiveGroup[];
  retentionHours?: number;
};
