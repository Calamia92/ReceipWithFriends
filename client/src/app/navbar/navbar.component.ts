import { Component } from '@angular/core';
import { NavbarTitleComponent } from './navbar-title/navbar-title.component';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';
import { NavbarIconComponent } from './navbar-icon/navbar-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarTitleComponent,
    NavbarSearchComponent,
    NavbarIconComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

}
