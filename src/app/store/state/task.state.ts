import { TaskModel } from "src/app/api/models/task.model";

export interface TasksState {
  tasks: TaskModel[];
  isLoaded: boolean;
}

export const initialTasksState: TasksState = {
  tasks: [],
  isLoaded: false
}
