import {AfterContentInit, Component, ElementRef, forwardRef, Injector, Input, ViewChild} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";


const specialKeys: Array<string> = ['Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

const BACKSPACE = 'Backspace'

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberInputComponent),
    multi: true
  }
  ]
})

export class NumberInputComponent implements ControlValueAccessor, AfterContentInit {
  private regex: RegExp = new RegExp(/^(?!0\d)(?:\d+|\d{1,3}(?:,\d{3})+)?$/gm);

  @ViewChild('input') input!: ElementRef;

  @Input() label!: string;
  @Input() hideLabel = false;
  @Input() styleClass: object = {};
  value: string = '';

  change!: (value: number | null) => void;

  control!: AbstractControl;


  constructor(private injector: Injector) {
  }

  ngAfterContentInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      if(this.control.value){
        this.updateValueStr();
      }
    } else {
      console.error('ใส่ ngControl ด้วยนะจร๊ะ');
    }
  }


  onChange(event: KeyboardEvent): void {
    this.updateValue(event);

    this.emitValue(<HTMLInputElement>event.target);
  }

  updateValue(event: KeyboardEvent) {
    // Allow tab, end, and home keys
    if (specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const el = <HTMLInputElement>event.target;
    const positionStart = el.selectionStart;
    const positionEnd = el.selectionEnd;

    if (event.key === BACKSPACE) {
      event.preventDefault();
      let current: string = this.getValueAfterBackspace(el);
      this.updateCurrentValueWithComma(event, current, el);
      this.updateSelectionPosition(event.key, el, positionStart, positionEnd);
    }

    const next: string = this.getCurrentValue(el, event);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    } else {
      this.updateCurrentValueWithComma(event, next, el);
      this.updateSelectionPosition(event.key, el, positionStart, positionEnd);
    }
  }

  private emitValue(el: HTMLInputElement) {
    const rawData = (el).value.split(',').join('');
    if (rawData.length > 0 && rawData !== '') {
      this.change(parseInt(rawData));
    } else {
      this.change(null);
    }
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }


  private updateSelectionPosition(event: string, el: HTMLInputElement, positionStart: number | null, positionEnd?: number | null) {
    if (positionStart !== positionEnd) {
      el.selectionStart = positionStart;
      el.selectionEnd = positionStart;
      this.updatePositionIfCurrentIndexIsComma(el);
    } else {
      if (event === BACKSPACE) {
        el.selectionStart = positionStart ? positionStart - 1 : 0;
        el.selectionEnd = el.selectionStart;
        this.updatePositionIfCurrentIndexIsComma(el);
      }
      // else{
      //   el.selectionStart = positionStart ? positionStart + 1 : 0;
      //   el.selectionEnd = el.selectionStart;
      //   this.updatePositionIfCurrentIndexIsComma(el);
      // }
    }
  }

  updatePositionIfCurrentIndexIsComma = (input: HTMLInputElement) => {
    const currentData = input.value.slice(input.selectionStart ? input.selectionStart - 1 : 0, input.selectionStart ?? 0);
    if (currentData === ',') {
      input.selectionStart = input.selectionStart ? input.selectionStart - 1 : 0;
      input.selectionEnd = input.selectionStart
    }
  }


  private getValueAfterBackspace(el: HTMLInputElement) {
    const positionStart = el.selectionStart;
    const positionEnd = el.selectionEnd;

    let current: string = el.value;
    if (positionStart === positionEnd) {
      current = current.slice(0, positionStart ? positionStart - 1 : 0) + current.slice(positionEnd ?? 0);
    } else {
      current = current.slice(0, positionStart ?? 0) + current.slice(positionEnd ?? 0);
    }

    return current.split(",").join('');
  }

  private getCurrentValue(el: HTMLInputElement, event: KeyboardEvent) {
    let current: string = el.value;
    const positionStart = el.selectionStart;
    const positionEnd = el.selectionEnd;
    let next: string;
    if (positionStart === positionEnd) {
      next = [current.slice(0, positionStart ?? 0), event.key == 'Decimal' ? '.' : event.key, current.slice(positionEnd ?? 0)].join('');
    } else {
      if (positionStart === 0) {
        next = [event.key == 'Decimal' ? '.' : event.key, current.slice(positionEnd ?? 0)].join('');
      } else {
        next = [current.slice(0, positionStart ? positionStart - 1 : 0), event.key == 'Decimal' ? '.' : event.key, current.slice(positionEnd ?? 0)].join('');
      }
    }
    return next.split(",").join('');
  }

  private updateCurrentValueWithComma(event: KeyboardEvent, next: string, el: HTMLInputElement) {
    event.preventDefault();
    let newValue = next.split('.');
    newValue[0] = newValue[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    el.value = newValue.join('.');
  }

  increase() {
    let value = this.control.value;
    if (value === null) {
      this.value = '1';
      this.change(1);
      return;
    }
    value += 1;
    this.change(value);
    const newValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.value = newValue;
  }

  decrease() {
    let value = this.control.value;
    if (value === null || value === 1 || value === 0) {
      this.value = '0';
      this.change(0);
      return;
    }
    value -= 1;
    this.change(value);
    const newValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.value = newValue;
  }

  updateValueStr(): void {
    let value = this.control.value;
    const strValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.value = strValue;
  }

}
