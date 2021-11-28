import {AfterContentInit, Component, forwardRef, Injector, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }
  ]
})
export class InputComponent implements ControlValueAccessor, AfterContentInit {

  @Input() label!: string;
  value: string = '';

  change!: (value: string) => void;

  control!: AbstractControl;


  constructor(private injector: Injector) {
  }

  ngAfterContentInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
    } else {
      // Component is missing form control binding
    }
  }

  onChange(event: Event): void {
    const value = (<HTMLInputElement>event.target).value;
    this.change(value);
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }

}
