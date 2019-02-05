import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }

  validate(formGroup: FormGroup): { [key: string]: any } {
    const addresControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    const onlineUrlControl = (<FormGroup>formGroup.root).controls.onlineUrl;

    if ((addresControl
        && addresControl.value
        && cityControl
        && cityControl.value
        && countryControl
        && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
          return null;
    } else {
      return { validateLocation: 'false' };
    }
  }
}
