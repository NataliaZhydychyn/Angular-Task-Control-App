import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BUTTON_SIZE, BUTTON_TYPE } from './button.config';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() textButton!: string;
  @Input() sizeButton: BUTTON_SIZE = BUTTON_SIZE.BIG;
  @Input() typeButton: BUTTON_TYPE = BUTTON_TYPE.MAIN;
  @Input() type!: string;

  get defaultClass() {
    return `button button-${this.sizeButton} button-${this.typeButton}`
  }
}

