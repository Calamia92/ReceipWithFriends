import { Component, OnInit } from '@angular/core';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    FavoriteCardComponent
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent implements OnInit {
  // Récupérer les données des services
  favorites : any | undefined;

  ngOnInit(): void {
    this.favorites = [
      {id : 1, name : "Poulet à la moutarde", date : "27/05/2°24"}
    ];
  }
}
