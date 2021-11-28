import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, NgControl} from "@angular/forms";

@Component({
  selector: 'app-filed-error',
  templateUrl: './filed-error.component.html',
  styleUrls: ['./filed-error.component.css']
})
export class FiledErrorComponent {

  @Input() formFiled?:AbstractControl;

}
