import { BoardModel } from './../../api/models/board.model';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { TaskModel } from "src/app/api/models/task.model";
import { BoardsService } from "src/app/api/services/boards.service";

import * as BoardsActions from "../actions/boards.actions";

@Injectable()
export class BoardsEffects {
  boardsEffects$ = createEffect(() => this.actions$.pipe(
    ofType(BoardsActions.getBoardsAction),
    mergeMap(() => this.boardsService.getBoards()
    .pipe(
      map((boards) => BoardsActions.getBoardsActionSuccess({ boards })),
      catchError(() => of(BoardsActions.getBoardsActionFail()))
    ))
  ))

  addBoardEffect$ = createEffect(() => this.actions$.pipe(
    ofType(BoardsActions.addBoardAction),
    mergeMap(({board}:{board:BoardModel}) => this.boardsService.addNewBoard(board)
    .pipe(
      map((board) => BoardsActions.addBoardActionSuccess({board})),
      catchError(() => of(BoardsActions.addBoardActionFail()))
    ))
  ))

  deleteBoardEffect$ = createEffect(() => this.actions$.pipe(
    ofType(BoardsActions.deleteBoardAction),
    switchMap(({ id }) => this.boardsService.deleteBoard(id)
    .pipe(
      map((boards) => BoardsActions.getBoardsActionSuccess({ boards })),
      catchError(() => of(BoardsActions.getBoardsActionFail()))
    ))
  ))

  editBoardEffect$ = createEffect(() => this.actions$.pipe(
    ofType(BoardsActions.editBoardAction),
    tap(console.log),
    switchMap( data => this.boardsService.editBoard(data.id, data.task)
    .pipe(
      map((board) => BoardsActions.editBoardActionSuccess({ board })),
      catchError(() => of(BoardsActions.editBoardActionFail()))
    ))
  ))







  constructor(
    private actions$: Actions,
    private boardsService: BoardsService
  ) {}
}
