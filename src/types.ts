export interface ToDoItem {
  name: string;
  color: string;
}

export interface SavedList {
  label: string;
  id: string;
  bgColor: string;
  youtubeUrl: string;
  toDos: ToDoItem[];
  toDos2: ToDoItem[];
  retentionHours?: number;
}

export interface Configuration {
  savedLists: SavedList[];
}
