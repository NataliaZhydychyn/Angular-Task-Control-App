import { BoardModel } from './../../api/models/board.model';
import { createAction, props } from "@ngrx/store";


export enum BoardsActions {
  GetBoards = '[Boards List] Get Boards',
  GetBoardsSuccess = '[Boards List] Get Boards Success',
  GetBoardsFail = '[Boards List] Get Boards Fail',
  AddBoard = '[Board List] Add Board',
  AddBoardSuccess = '[Board List] Add Board Success',
  AddBoardFail = '[Board List] Add Board Fail',
  DeleteBoard = '[Board List] Delete Board',
  DeleteBoardSuccess = '[Board List] Delete Board Success',
  DeleteBoardFail = '[Board List] Delete Board Fail',
  EditBoard = '[Board List] Edit Board',
  EditBoardSuccess = '[Board List] Edit Board Success',
  EditBoardFail = '[Board List] Edit Board Fail'
}

export const getBoardsAction = createAction(BoardsActions.GetBoards);
export const getBoardsActionSuccess = createAction(BoardsActions.GetBoardsSuccess, props<{boards: BoardModel[]}>());
export const getBoardsActionFail = createAction(BoardsActions.GetBoardsFail);

export const addBoardAction = createAction(BoardsActions.AddBoard, props<{board: BoardModel}>());
export const addBoardActionSuccess = createAction(BoardsActions.AddBoardSuccess, props<{board: BoardModel}>());
export const addBoardActionFail = createAction(BoardsActions.AddBoardFail);

export const deleteBoardAction = createAction(BoardsActions.DeleteBoard, props<{id: number}>());
export const deleteBoardActionSuccess = createAction(BoardsActions.AddBoardSuccess, props<{board: BoardModel[]}>());
export const deleteBoardActionFail = createAction(BoardsActions.AddBoardFail);

export const editBoardAction = createAction(BoardsActions.EditBoard, props<{ id: number, board: BoardModel}>());
export const editBoardActionSuccess = createAction(BoardsActions.EditBoardSuccess, props<{board: BoardModel}>());
export const editBoardActionFail = createAction(BoardsActions.EditBoardFail);

