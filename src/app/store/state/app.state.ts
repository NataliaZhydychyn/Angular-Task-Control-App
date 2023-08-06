import { BoardsState, initialBoardsState } from './board.state';
import { initialTasksState, TasksState } from "./task.state";


export interface AppState {
  tasks: TasksState;
  boards: BoardsState;
}

export const initialAppState: AppState = {
  tasks: initialTasksState,
  boards: initialBoardsState
}
