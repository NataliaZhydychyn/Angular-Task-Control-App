import { TaskModel, TaskStatus } from './../../../../api/models/task.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { BUTTON_SIZE, BUTTON_TYPE } from 'src/app/shared/components/button/button.config';
import { TaskStateFacade } from 'src/app/store/facade/tasks.state.facade';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskModel;
  @Output() deleteTaskById: EventEmitter<number> = new EventEmitter<number>();

  sizeButton = BUTTON_SIZE;
  typeButton = BUTTON_TYPE;
  editToInput = true;
  taskNameGroup!: FormGroup;
  taskNameControl = "taskNameControl";

  get nameOfTaskControl(): AbstractControl {
    return this.taskNameGroup.controls[this.taskNameControl]
  }

  constructor(private readonly formBuilder: FormBuilder,
    private readonly taskStateFacade: TaskStateFacade) { }

  ngOnInit(): void {
    this.taskNameGroup = this.formBuilder.group({
      [this.taskNameControl]:[this.task.name, Validators.minLength(3)],
    });

    this.nameOfTaskControl?.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.task = {
        ...this.task,
        name: value,
      }
      console.log(this.task);
      this.taskStateFacade.changeTask(this.task.id, this.task)
    })
  }

  onEditTask(): void{
    this.editToInput = !this.editToInput;
  }

  onDeleteTask(id: number): void{
    console.log(`delete the task ${id}`);
    this.deleteTaskById.emit(id);
  }


}
