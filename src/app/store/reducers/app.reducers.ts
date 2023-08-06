import { ActionReducerMap } from "@ngrx/store";
import { tasksReducer } from "./task.reducer";
import { boardsReducer } from "./board.reducer";

export const appReducers: ActionReducerMap<any, any> = {
  tasks: tasksReducer,
  boards: boardsReducer,
};
