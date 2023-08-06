import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillOfDashboardComponent } from './components/fill-of-dashboard/fill-of-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddNewBoardComponent, BoardComponent } from './components';

@NgModule({
  declarations: [
    FillOfDashboardComponent,
    AddNewBoardComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FillOfDashboardComponent,
    AddNewBoardComponent,
    BoardComponent
  ]
})
export class DashbordModule { }
