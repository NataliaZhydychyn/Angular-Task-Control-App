export enum TaskStatus {
  IN_PROGRESS = 'PROGRESS',
  DONE = 'DONE',
  START = 'START',
}

export interface TaskModel {
  id: number;
  createdAt: Date;
  name: string;
  status: TaskStatus;
  boardId: number;
}
