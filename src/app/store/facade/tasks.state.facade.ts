import { Injectable } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { TasksState } from '../state/task.state';
import * as TasksActions from "../actions/tasks.actions";
import { taskSelector } from "../selectors/tasks.selectors";
import { TaskModel } from "src/app/api/models/task.model";

@Injectable()
export class TaskStateFacade {
  taskList$ = this.store.pipe(select(taskSelector));

  getTasksLists(boardId: number): void {
    this.store.dispatch(TasksActions.getTasksAction({ boardId }))
  }

  addNewTask(task: TaskModel): void {
    this.store.dispatch(TasksActions.addTaskAction({ task }))
  }

  removeTask(id: number, boardId: number): void {
    this.store.dispatch(TasksActions.deleteTaskAction({ id, boardId }))
  }

  changeTask(id: number, task: TaskModel) {
    this.store.dispatch(TasksActions.editTaskAction({ id, task }))
  }

  constructor(private readonly store: Store<TasksState>) {}
}
