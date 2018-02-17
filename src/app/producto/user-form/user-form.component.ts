import { Component, OnInit } from '@angular/core';
import { User } from './../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  countries = ['Perú', 'Brasil', 'USA', 'Japon'];
  model = new User('','','');
  submitted = false;
    constructor() { }

ngOnInit() {
}
  onSubmitted(){
    this.submitted = true;
  }
}
