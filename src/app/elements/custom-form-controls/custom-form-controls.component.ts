import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-custom-form-controls',
  templateUrl: './custom-form-controls.component.html',
  styleUrls: ['./custom-form-controls.component.css']
})
export class CustomFormControlsComponent implements OnInit {

  name!: FormControl;

  numberInput!: FormControl;

  numberCounter!: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.name = new FormControl('test', [Validators.required, Validators.maxLength(5)]);

    this.numberInput = new FormControl(7654321);

    this.numberCounter = new FormControl(1234567890);
  }

}
