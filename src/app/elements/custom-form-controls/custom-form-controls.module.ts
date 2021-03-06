import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomFormControlsComponent} from './custom-form-controls.component';
import {InputComponent} from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FieldErrorComponent} from './filed-error/field-error.component';
import {NumberInputComponent} from "./number-input/number-input.component";
import {CounterNumberInputComponent} from "./couter-number-input/counter-number-input.component";


@NgModule({
  declarations: [
    CustomFormControlsComponent,
    InputComponent,
    NumberInputComponent,
    FieldErrorComponent,
    CounterNumberInputComponent
  ],
  exports: [
    CustomFormControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomFormControlsModule {
}
