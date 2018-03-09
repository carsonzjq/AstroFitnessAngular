import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfimationValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmationDirective,
        multi: true
    }]
})
export class ConfirmationDirective implements Validator {
    @Input() appConfirmationValidator: string;
    validate(control: AbstractControl): { [key:string]: any } | null {
        const controlToCompare = control.parent.get(this.appConfirmationValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual' : true};
        }
        return null;
    }
}