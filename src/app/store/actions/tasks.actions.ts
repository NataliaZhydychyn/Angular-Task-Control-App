import { TaskModel } from './../../api/models/task.model';
import { createAction, props } from "@ngrx/store";

export enum TasksActions {
  GetTasks = '[Task List] Get Tasks',
  GetTasksSuccess = '[Task List] Get Tasks Success',
  GetTasksFail = '[Task List] Get Tasks Fail',
  AddTask = '[Task List] Add Tasks',
  AddTaskSuccess = '[Task List] Add Tasks Success',
  AddTaskFail = '[Task List] Add Tasks Fail',
  DeleteTask = '[Task List] Delete Tasks',
  DeleteTaskSuccess = '[Task List] Delete Tasks Success',
  DeleteTaskFail = '[Task List] Delete Tasks Fail',
  EditTask = '[Task List] Edit Tasks',
  EditTaskSuccess = '[Task List] Edit Tasks Success',
  EditTaskFail = '[Task List] Edit Tasks Fail'
}

export const getTasksAction = createAction(TasksActions.GetTasks, props<{boardId: number}>());
export const getTasksActionSuccess = createAction(TasksActions.GetTasksSuccess, props<{tasks: TaskModel[]}>());
export const getTasksActionFail = createAction(TasksActions.GetTasksFail);

export const addTaskAction = createAction(TasksActions.AddTask, props<{task: TaskModel}>());
export const addTaskActionSuccess = createAction(TasksActions.AddTaskSuccess, props<{task: TaskModel}>());
export const addTaskActionFail = createAction(TasksActions.AddTaskFail);

export const deleteTaskAction = createAction(TasksActions.DeleteTask, props<{id: number, boardId: number}>());
export const deleteTasksActionSuccess = createAction(TasksActions.AddTaskSuccess, props<{task: TaskModel[]}>());
export const deleteTasksActionFail = createAction(TasksActions.AddTaskFail);

export const editTaskAction = createAction(TasksActions.EditTask, props<{ id: number, task: TaskModel}>());
export const editTasksActionSuccess = createAction(TasksActions.EditTaskSuccess, props<{task: TaskModel}>());
export const editTasksActionFail = createAction(TasksActions.EditTaskFail);
