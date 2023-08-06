import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewTaskComponent } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FillOfBoardComponent } from './components/fill-of-board/fill-of-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AddNewTaskComponent,
    TaskComponent,
    TaskListComponent,
    FillOfBoardComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  exports:[
    AddNewTaskComponent,
    TaskComponent,
    TaskListComponent,
    FillOfBoardComponent
  ]
})
export class BoardModule { }
