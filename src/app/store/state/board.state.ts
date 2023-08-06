import { BoardModel } from "src/app/api/models/board.model";

export interface BoardsState {
  boards: BoardModel[];
  isLoaded: boolean;
}

export const initialBoardsState: BoardsState = {
  boards: [],
  isLoaded: false
}
