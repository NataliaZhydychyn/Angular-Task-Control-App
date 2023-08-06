import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoardModel } from 'src/app/api/models/board.model';
import { BUTTON_SIZE, BUTTON_TYPE } from 'src/app/shared/components/button/button.config';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board!: BoardModel;
  @Output() deleteBoardById: EventEmitter<number> = new EventEmitter<number>();
  @Output() redirectToTasks: EventEmitter<number> = new EventEmitter<number>();
  sizeButton = BUTTON_SIZE;
  typeButton = BUTTON_TYPE;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onDeleteBoard(id: number):void {
    console.log(`delete the board ${id}`);
    this.deleteBoardById.emit(id);
  }

  redirectToTaskList(): void {
    this.redirectToTasks.emit(this.board.id);
  }
}
