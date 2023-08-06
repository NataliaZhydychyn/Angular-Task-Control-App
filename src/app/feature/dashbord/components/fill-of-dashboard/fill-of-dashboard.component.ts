import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BUTTON_SIZE, BUTTON_TYPE } from 'src/app/shared/components/button/button.config';
import { BoardStateFacade } from 'src/app/store/facade/boards.state.facade';

@Component({
  selector: 'app-fill-of-dashboard',
  templateUrl: './fill-of-dashboard.component.html',
  styleUrls: ['./fill-of-dashboard.component.scss']
})
export class FillOfDashboardComponent implements OnInit {
  sizeButton = BUTTON_SIZE;
  typeButton = BUTTON_TYPE;
  boards$ = this.boardStateFacade.boardList$;
  modalForm = false;

  constructor(
    private readonly boardStateFacade: BoardStateFacade,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.boardStateFacade.getBoardsList();
  }

  onDeleteOneBoard(id: number):void {
    this.boardStateFacade.removeBoard(id);
  }

  onRedirectToTasks(id: number): void {
    this.router.navigateByUrl(`/board/${id}/tasks`);
  }
}
