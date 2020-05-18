import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function ValidateIfChecked(formControlName): ValidatorFn {
  return (form: FormGroup): ValidationErrors | null => {
    const checked = form.get(formControlName);
    if (checked) {
      return {
        err: true
      };
    }
    return null;
  };
}
