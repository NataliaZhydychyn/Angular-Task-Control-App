import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { concatMap, Observable } from "rxjs";
import { BoardModel } from "../models/board.model";

@Injectable({
  providedIn: 'root',
})

export class BoardsService {
  private boardsUrl = 'http://localhost:3000/boards';

  constructor(private readonly http: HttpClient) { }

  getBoards(): Observable<BoardModel[]> {
    return this.http.get<BoardModel[]>(this.boardsUrl)
  }

  addNewBoard(task: BoardModel): Observable<BoardModel> {
    return this.http.post<BoardModel>(this.boardsUrl, task)
  }

  deleteBoard(id: number): Observable<BoardModel[]> {
    const url = `${this.boardsUrl}/${id}`;
    return this.http.delete(url).pipe(
      concatMap(() => this.getBoards()),
    );
  }

  editBoard(id: string, board: BoardModel): Observable<BoardModel> {
    const url = `${this.boardsUrl}/${id}`;
    return this.http.patch<BoardModel>(url, board);
  }



}

