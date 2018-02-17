import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  isLoggedIn:boolean = false;
  constructor() { }
  login(username,password){  
    if(username === "Cibertec" && password === "123"){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
      return this.isLoggedIn;
  }
}
