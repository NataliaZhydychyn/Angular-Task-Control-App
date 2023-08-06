import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BoardsState } from "../state/board.state";

export const selectBoards = createFeatureSelector<BoardsState>('boards');
export const boardSelector = createSelector(
  selectBoards,
  (state: BoardsState) => state?.boards,
)
