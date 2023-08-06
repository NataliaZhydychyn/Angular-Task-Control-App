import { TaskModel } from 'src/app/api/models/task.model';
import { createReducer, on } from "@ngrx/store";
import { initialTasksState } from "../state/task.state";
import * as TasksActions from "../actions/tasks.actions";

export const tasksReducer = createReducer(
  initialTasksState,
  on(TasksActions.getTasksAction, state => ({ ...state})),
  on(TasksActions.getTasksActionSuccess, (state, { tasks }:{ tasks: TaskModel[] }) => ({
    ...state,
    tasks,
  })),
  on(TasksActions.addTaskActionSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),

  on(TasksActions.editTaskAction, state => ({...state})),
  on(TasksActions.editTasksActionSuccess, (state, { task }) => ({
    ...state,
    task,
  }))

)
