import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, InputComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ButtonComponent,
    InputComponent
  ],
  exports: [
    ButtonComponent,
    InputComponent
  ],
})
export class SharedModule { }

