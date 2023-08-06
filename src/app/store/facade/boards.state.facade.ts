import { Injectable } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { BoardsState } from '../state/board.state';
import * as BoardsActions from "../actions/boards.actions";
import { boardSelector } from "../selectors/boards.selectors";
import { BoardModel } from "src/app/api/models/board.model";

@Injectable()
export class BoardStateFacade {
  boardList$ = this.store.pipe(select(boardSelector));

  getBoardsList(): void {
    this.store.dispatch(BoardsActions.getBoardsAction());
  }

  addNewBoard (board: BoardModel): void {
    this.store.dispatch(BoardsActions.addBoardAction({ board }))
  }

  removeBoard(id: number): void {
    this.store.dispatch(BoardsActions.deleteBoardAction({ id }))
  }

  changeBoard(id: number, board: BoardModel) {
    this.store.dispatch(BoardsActions.editBoardAction({ id, board }))
  }

  constructor(private readonly store: Store<BoardsState>) {}
}
