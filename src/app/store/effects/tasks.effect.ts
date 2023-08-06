import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { TaskModel } from "src/app/api/models/task.model";
import { TasksService } from "src/app/api/services/tasks.service";

import * as TasksActions from "../actions/tasks.actions";

@Injectable()
export class TasksEffects {
  tasksEffects$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.getTasksAction),
    mergeMap(({ boardId }:{ boardId: number }) => this.tasksService.getTasks(boardId)
    .pipe(
      map((tasks) => TasksActions.getTasksActionSuccess({tasks})),
      catchError(() => of(TasksActions.getTasksActionFail()))
    ))
  ))

  addTaskEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.addTaskAction),
    mergeMap(({task}:{task:TaskModel}) => this.tasksService.addNewTask(task)
    .pipe(
      map((task) => TasksActions.addTaskActionSuccess({task})),
      catchError(() => of(TasksActions.addTaskActionFail()))
    ))
  ))

  deleteTaskEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.deleteTaskAction),
    switchMap(({ id, boardId }) => this.tasksService.deleteSomeTask(id, boardId)
    .pipe(
      map((tasks) => TasksActions.getTasksActionSuccess({tasks})),
      catchError(() => of(TasksActions.getTasksActionFail()))
    ))
  ))

  editTaskEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.editTaskAction),
    tap(console.log),
    switchMap( data => this.tasksService.editTask(data.id, data.task)
    .pipe(
      map((task) => TasksActions.editTasksActionSuccess({ task })),
      catchError(() => of(TasksActions.editTasksActionFail()))
    ))
  ))


  constructor(
    private actions$: Actions,
    private tasksService: TasksService
  ) {}
}

