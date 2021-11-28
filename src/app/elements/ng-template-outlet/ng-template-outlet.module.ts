import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgTemplateOutletComponent} from "./ng-template-outlet.component";
import { BasicComponent } from './basic/basic.component';
import { PassingTemplateAsInputComponent } from './passing-template-as-input/passing-template-as-input.component';
import { ChildComponent } from './passing-template-as-input/child/child.component';
import { ParentComponent } from './passing-template-as-input/parent/parent.component';


@NgModule({
  declarations: [
    NgTemplateOutletComponent,
    BasicComponent,
    PassingTemplateAsInputComponent,
    ChildComponent,
    ParentComponent
  ],
  exports: [
    NgTemplateOutletComponent
  ],
  imports: [
    CommonModule]
})
export class NgTemplateOutletModule {
}
