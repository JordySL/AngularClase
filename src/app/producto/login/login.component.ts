import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // form = new FormGroup({
  //   username : new FormControl('',Validators.required),
  //   password : new FormControl('',Validators.required)
  // });

  form: FormGroup;
  constructor(private fb: FormBuilder,
    private productoService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose(
        [Validators.required, PasswordValidator.cannotContainWhiteSpaces]
      )]
    });
  }

  ngOnInit() {
  }

  login() {
    const result = this.productoService.login(
      this.form.controls['username'].value,
      this.form.controls['password'].value);
    if (!result) {
      this.form.controls['password']
        .setErrors({ InvalidLogin: true });
    }
    console.log(this.form.value)
  }
}
