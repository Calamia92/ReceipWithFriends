import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { UserService } from '../../services/user.service';
import e from 'express';

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
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  passwordHidden: Boolean | undefined;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.passwordHidden = false;
  }

  registerCustomer() {
    const userData = {
      email: this.email.value,
      password: this.password.value,
      telephone: this.telephone.value,
      prenom: this.telephone.value,
      nom: this.telephone.value
    };

    this.userService.createUser(userData)
      .then(response => {
        // console.log('Utilisateur créé avec succès', response);

        this.router.navigate(['/login']).then(() => {
          location.reload();
        });
      })
      .catch(error => {
        // console.error('Erreur lors de la création de l\'utilisateur', error);
      });
  }

  viewPassword() {
    this.passwordHidden = !this.passwordHidden;
  }

  onSubmit() {}
}
