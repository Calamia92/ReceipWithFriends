import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  passwordHidden: Boolean | undefined;

  constructor(private router: Router, private userService: UserService) {}

  loginCustomer() {
    const userData = {
      email: this.email.value,
      password: this.password.value,
    };

    this.userService.loginUser(userData).then(response => {
      const user = response.user;
      localStorage.setItem('user', user);
      
      this.router.navigate(['/']).then(() => {
        location.reload();
      });
    })
    .catch(error => {
      console.error('Erreur lors de la connexion', error);
    });
  }

  viewPassword() {
    this.passwordHidden = !this.passwordHidden;
  }

  onSubmit() {}
}
