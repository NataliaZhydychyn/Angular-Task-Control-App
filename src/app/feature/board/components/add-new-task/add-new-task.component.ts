import { debounceTime } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BUTTON_SIZE, BUTTON_TYPE } from 'src/app/shared/components/button/button.config';
import { TaskModel, TaskStatus } from 'src/app/api/models/task.model';
import { TasksService } from 'src/app/api/services/tasks.service';
import { TaskStateFacade } from 'src/app/store/facade/tasks.state.facade';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {
  @Input() myGroup!: FormGroup;
  @Input() taskName = "taskControl";
  @Output() close = new EventEmitter<void>()

  sizeButton = BUTTON_SIZE;
  typeButton = BUTTON_TYPE;
  newTask!: TaskModel;

  get taskControlName():any {
    return this.myGroup.controls["taskControl"]
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly taskStateFacade: TaskStateFacade
  ) { }

  ngOnInit(): void {
    this.myGroup = this.formBuilder.group({
      [this.taskName]: ['', Validators.minLength(3)],
    });

    this.taskControlName?.valueChanges.pipe(debounceTime(500)).subscribe((value: string) => {
      //TODO: change this logic when the boald logic will be implemented
      this.newTask = {
        id: Math.random(),
        createdAt: new Date(),
        name: value,
        status: TaskStatus.START,
        boardId: 0,
      };
      console.log(this.newTask);
    })
  }

  onAddTask(): void {
    this.taskStateFacade.addNewTask(this.newTask);
    this.myGroup.reset();
  }
}
