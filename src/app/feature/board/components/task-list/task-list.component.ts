import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/api/models/task.model';
import { BUTTON_SIZE, BUTTON_TYPE } from 'src/app/shared/components/button/button.config';
import { TaskStateFacade } from 'src/app/store/facade/tasks.state.facade';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskList!:TaskModel[] | null;
  @Input() listName!: string;
  sizeButton = BUTTON_SIZE;
  typeButton = BUTTON_TYPE;
  modal = true;
  boardId!: any;

  constructor(
    private readonly taskStateFacade: TaskStateFacade,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params || null;
    this.boardId = id;
   }

  onDelete(id: number): void {
    console.log('id deleted task', id);
    this.taskStateFacade.removeTask(id, this.boardId);
  }

  drop(event: CdkDragDrop<TaskModel[]>) {
    console.log(event);
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

}
