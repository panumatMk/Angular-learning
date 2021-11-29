import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgTemplateOutletComponent} from "./ng-template-outlet.component";
import { BasicComponent } from './basic/basic.component';
import { PassingTemplateAsInputComponent } from './passing-template-as-input/passing-template-as-input.component';
import { ChildComponent } from './passing-template-as-input/child/child.component';
import { ParentComponent } from './passing-template-as-input/parent/parent.component';
import { PassingTemplateAsContentComponent } from './passing-template-as-content/passing-template-as-content.component';
import { BookComponent } from './passing-template-as-content/book/book.component';


@NgModule({
  declarations: [
    NgTemplateOutletComponent,
    BasicComponent,
    PassingTemplateAsInputComponent,
    ChildComponent,
    ParentComponent,
    PassingTemplateAsContentComponent,
    BookComponent
  ],
  exports: [
    NgTemplateOutletComponent
  ],
  imports: [
    CommonModule]
})
export class NgTemplateOutletModule {
}
