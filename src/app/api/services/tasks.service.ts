import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, debounceTime, map, Observable, of, tap } from 'rxjs';
import { TaskModel  } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private taskUrl = 'http://localhost:3000/tasks';


constructor(private readonly http: HttpClient) { }

  getTasks(boardId: number): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.taskUrl).pipe(
      map((tasks: TaskModel[]) => tasks.filter((task: TaskModel) => task.boardId == boardId)),
    )
  }

  addNewTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.taskUrl, task)
  }

  deleteSomeTask(id: number, boardId: number): Observable<TaskModel[]> {
    const url = `${this.taskUrl}/${id}`;
    console.log(url);
    return this.http.delete(url).pipe(
      concatMap(() => this.getTasks(boardId)),
    );
  }

  editTask(id: string, task: TaskModel): Observable<TaskModel> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.patch<TaskModel>(url, task);
  }
}


