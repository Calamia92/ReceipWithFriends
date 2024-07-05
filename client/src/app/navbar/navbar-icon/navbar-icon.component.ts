import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-icon',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './navbar-icon.component.html',
  styleUrl: './navbar-icon.component.scss'
})
export class NavbarIconComponent {
}
