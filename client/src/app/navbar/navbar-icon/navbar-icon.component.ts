import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { resolve } from 'path';
import { error } from 'console';

@Component({
  selector: 'app-navbar-icon',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './navbar-icon.component.html',
  styleUrl: './navbar-icon.component.scss'
})

export class NavbarIconComponent implements OnInit {
  id : any | undefined;
  customer : any | undefined;
  data : any | undefined;
  route : any | undefined;

  constructor(private userService : UserService){}

  ngOnInit(): void {

    this.data = this.userService.getCustomerId();
    console.log(this.data);
    if(this.data){
      this.getCustomerData().then((resolve) => {
        this.customer = resolve.nom;
        this.route = "/profile";
      }).catch((error) =>{
       
      })
    }else {
      this.customer = "Connexion"
      this.route = "/login";
    }
  }

  getCustomerData(){
    return this.userService.getUser();
  }
}
