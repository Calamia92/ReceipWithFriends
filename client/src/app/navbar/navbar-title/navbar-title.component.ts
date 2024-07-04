import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-title',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar-title.component.html',
  styleUrl: './navbar-title.component.scss'
})
export class NavbarTitleComponent {

}
