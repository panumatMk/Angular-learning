import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomFormControlsModule} from "./elements/custom-form-controls/custom-form-controls.module";
import {NgTemplateOutletModule} from "./elements/ng-template-outlet/ng-template-outlet.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomFormControlsModule,
    NgTemplateOutletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
