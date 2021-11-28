import {AfterContentInit, Component, forwardRef, Injector, Input, OnDestroy} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
import {Subscription} from "rxjs";


const specialKeys: Array<string> = ['Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

const BACKSPACE = 'Backspace'

@Component({
  selector: 'app-counter-number-input',
  templateUrl: './counter-number-input.component.html',
  styleUrls: ['./counter-number-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterNumberInputComponent),
    multi: true
  }
  ]
})

export class CounterNumberInputComponent implements ControlValueAccessor, AfterContentInit, OnDestroy {
  private regex: RegExp = new RegExp(/^(?!0\d)(?:\d+|\d{1,3}(?:,\d{3})+)?$/gm);

  @Input() label!: string;

  numberInput!: FormControl;

  change!: (value: number | null) => void;

  control!: AbstractControl;

  subscription = new Subscription();

  constructor(private injector: Injector) {
    this.numberInput = new FormControl();
  }

  ngAfterContentInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
    } else {
      // Component is missing form control binding
    }

    this.subscription.add(this.numberInput.valueChanges.subscribe((value) => {
      this.change(value);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    this.numberInput.setValue(value);
  }

  decrease() {
    const data = this.numberInput.value;
    if (data === 0 || data === 1 || data === null) {
      this.numberInput.setValue(0);
      return;
    }
    this.numberInput.setValue(data - 1);
  }

  increase() {
    const data = this.numberInput.value;
    if (data === null) {
      this.numberInput.setValue(1);
      return;
    }
    this.numberInput.setValue(data + 1);
  }

}
