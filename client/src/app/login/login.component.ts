import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  passwordHidden: Boolean | undefined;

  constructor(private router: Router) {}

  loginCustomer() {}

  viewPassword() {
    this.passwordHidden = !this.passwordHidden;
  }

  onSubmit() {}
}
