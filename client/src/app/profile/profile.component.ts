import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  data : any | undefined;
  lastname : any | undefined;
  firstname : any | undefined;
  date : any | undefined;
  constructor(private userService : UserService, private router: Router){};

  ngOnInit(): void {
    this.data = this.userService.getUser().then((resolve) => {
    this.lastname = resolve.nom;
    this.firstname = resolve.nom;
    this.date = resolve.createdAt;
      if(!resolve){
        this.router.navigate(['/login']).then(() => {
          location.reload();
        });
      }
    });
  }

  logoutCustomer(){
    this.userService.logoutCustomer();
    this.router.navigate(['/login']).then(() => {
      location.reload();
    });
  }
}
