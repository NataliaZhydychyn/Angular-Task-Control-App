import { Component, Input, OnInit, SkipSelf } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer): ControlContainer => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class InputComponent implements OnInit {
  @Input() typeInput!: string;
  @Input() valueInput!: string;
  @Input() controlName!: string;
  @Input() idHtml!: string;
  @Input() labelText!: string;
  @Input() inputPlaceholder!: string;


  constructor() { }

  ngOnInit() {
  }

}
