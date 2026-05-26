export interface ToDoItem {
  name: string;
  color: string;
}

export interface SavedList {
  label: string;
  listId: string;
  backgroundListColor: string;
  fontListColor: string;
  embeddedYoutubeVideo: string;
  toDos: ToDoItem[];
  toDos2: ToDoItem[];
  retentionHours?: number;
}
