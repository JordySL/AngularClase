import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from './../login/login.component';
@Injectable()
export class PreventUnsavedChangesGuard implements CanDeactivate<LoginComponent> {

  canDeactivate(component: LoginComponent): boolean {
    if (component.form.dirty) {
      return confirm("Seguro quieres salir?");
    }
    return true;
  }

}
