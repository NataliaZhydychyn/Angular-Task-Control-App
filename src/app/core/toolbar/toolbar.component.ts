import { Component, OnInit } from '@angular/core';
import { BUTTON_SIZE, BUTTON_TYPE } from '../../shared/components/button/button.config';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  sizeButton = BUTTON_SIZE;
  typeButton = BUTTON_TYPE;

  constructor() { }

  ngOnInit(): void {
  }

}
