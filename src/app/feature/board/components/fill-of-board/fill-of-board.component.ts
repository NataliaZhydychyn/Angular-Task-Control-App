import { TaskModel, TaskStatus } from './../../../../api/models/task.model';
import { Component, Input, OnInit } from '@angular/core';
import { TaskStateFacade } from 'src/app/store/facade/tasks.state.facade';
import { BehaviorSubject, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fill-of-board',
  templateUrl: './fill-of-board.component.html',
  styleUrls: ['./fill-of-board.component.scss']
})
export class FillOfBoardComponent implements OnInit {
  modal = false;
  listOfTaskStart$ = new BehaviorSubject<TaskModel[]>([]);
  listOfTaskInProgress$ = new BehaviorSubject<TaskModel[]>([]);
  listOfTaskInDone$ =  new BehaviorSubject<TaskModel[]>([]);

  constructor(
    private readonly taskStateFacade: TaskStateFacade,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params || null;
    this.taskStateFacade.getTasksLists(id);

    this.taskStateFacade.taskList$.pipe(
      map((taskList: TaskModel[]) => {
        this.listOfTaskStart$.next(taskList.filter((task) => task.status === TaskStatus.START));
        this.listOfTaskInProgress$.next(taskList.filter((task) => task.status === TaskStatus.IN_PROGRESS));
        this.listOfTaskInDone$.next(taskList.filter((task) => task.status === TaskStatus.DONE));
      })
    ).subscribe();
  }




}
