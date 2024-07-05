import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.scss'
})
export class FavoriteCardComponent implements OnInit {
  @Input() favorite : any | undefined;
  name : any | undefined;
  date : any | undefined;
  id : any | undefined;
  isFavorite : Boolean | undefined;
  imageAlt : string | undefined;
  image : String | undefined;

  ngOnInit(): void {
    this.name = this.favorite.name;
    this.date = this.favorite.date;
    this.id = this.favorite.id;
    this.image = "https://cdn-icons-png.flaticon.com/512/7715/7715582.png";
  }

  onAddFavorite(name : any){
    this.isFavorite = !this.isFavorite;

    if(this.isFavorite){
      // ajouter aux favoris par name
    }else {
      // supprimer aux favoris par name
    }
  }
}
