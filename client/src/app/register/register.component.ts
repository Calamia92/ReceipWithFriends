import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgClass,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  telephone = new FormControl('', Validators.required);
  passwordHidden: Boolean | undefined;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.passwordHidden = false;
  }

  registerCustomer() {
    console.log("On enregistre l'utilisateur");
  }

  viewPassword() {
    this.passwordHidden = !this.passwordHidden;
  }

  onSubmit() {}
}
