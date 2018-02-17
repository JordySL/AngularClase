import { FormControl } from '@angular/forms';

export class PasswordValidator {
    static cannotContainWhiteSpaces(formControl: FormControl){
        if(formControl.value.indexOf(' ')>=0)
            return {cannotContainWhiteSpaces:true};
        
        return null;
    }
}
