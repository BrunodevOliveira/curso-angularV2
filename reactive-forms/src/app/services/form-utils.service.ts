import { Injectable } from '@angular/core';
import { ValidatorFn, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtilsService {
  constructor() {}

  // Para formulários com NonNullable true
  makeNonNullableFormControl<T>(
    value: T,
    validator: ValidatorFn[]
  ): FormControl<T> {
    return new FormControl(value, {
      nonNullable: true,
      validators: validator,
    });
  }

  // para forms  nonNullable false
  makeFormControl<T>(value: T, validator: ValidatorFn): FormControl<T | null> {
    return new FormControl(value, validator);
  }
}

//~🔎 tipo que mapeia um modelo para um grupo de formulário
export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};
