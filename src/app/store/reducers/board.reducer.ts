import { BoardModel } from 'src/app/api/models/board.model';
import { createReducer, on } from "@ngrx/store";
import { initialBoardsState } from "../state/board.state";
import * as BoardsActions from "../actions/boards.actions";

export const boardsReducer = createReducer(
  initialBoardsState,
  on(BoardsActions.getBoardsAction, state => ({ ...state})),
  on(BoardsActions.getBoardsActionSuccess, (state, { boards }:{ boards: BoardModel[] }) => ({
    ...state,
    boards,
  })),
  on(BoardsActions.addBoardActionSuccess, (state, { board }) => ({
    ...state,
    boards: [...state.boards, board]
  })),
  on(BoardsActions.editBoardAction, state => ({...state})),
  on(BoardsActions.editBoardActionSuccess, (state, { board }) => ({
    ...state,
    board,
  }))

)
