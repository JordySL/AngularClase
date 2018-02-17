import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './../login/login.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _service: LoginService,
    private _router: Router) {

  }

  canActivate() {
    if (this._service.isLoggedIn) {
      return true;
    }
    this._router.navigate(['/producto/login']);
    return false;
  }
}
