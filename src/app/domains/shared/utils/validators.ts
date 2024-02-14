import { AbstractControl } from '@angular/forms';

export class MyValidators {
  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNunber(value)) {
      return { invalid_password: true };
    }
    return null;
  }

  static matchPasswords(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password === confirmPassword) {
      return null;
    }
    return { match_password: true };
  }
}

function containsNunber(value: string) {
  return value.split('').filter((v) => isNumber(v)) !== undefined;
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}
