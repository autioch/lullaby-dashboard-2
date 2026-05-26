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

export interface Configuration {
  savedLists: SavedList[];
}
