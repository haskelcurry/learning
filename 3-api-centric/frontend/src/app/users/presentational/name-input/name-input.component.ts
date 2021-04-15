import { takeWhile } from 'rxjs/operators';
import { Component, forwardRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  Validator,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true
    }
  ]
})
export class NameInputComponent
  implements OnDestroy, ControlValueAccessor, Validator {
  alive = true;

  form = this.fb.group({
    firstName: null,
    middleName: null,
    lastName: null
  });

  onTouched = () => {};

  constructor(protected fb: FormBuilder) {}

  writeValue(value: any) {
    value && this.form.patchValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any) {
    this.form.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.form.disable() : this.form.enable();
  }

  validate() {
    return this.form.errors;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
