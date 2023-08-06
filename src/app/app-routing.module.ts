import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillOfBoardComponent } from './feature/board/components/fill-of-board/fill-of-board.component';
import { FillOfDashboardComponent } from './feature/dashbord/components/fill-of-dashboard/fill-of-dashboard.component';

// http://localhost:4200/ -> dashboard
// http://localhost:4200/board -> board


const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full',
  },
  {
    path: 'board',
    component: FillOfDashboardComponent },
  {
    path: 'board/:id/tasks',
    component: FillOfBoardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
