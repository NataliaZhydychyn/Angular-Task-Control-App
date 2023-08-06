import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "../state/task.state";

export const selectTasks = createFeatureSelector<TasksState>('tasks');
export const taskSelector = createSelector(
  selectTasks,
  (state: TasksState) => state?.tasks,
)
