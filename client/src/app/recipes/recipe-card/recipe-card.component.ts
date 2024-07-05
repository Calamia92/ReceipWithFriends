import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent implements OnInit {
  @Input() name : string | undefined;
  @Input() id : string | undefined;
  @Input() image : string | undefined;
  isFavorite : Boolean | undefined;
  imageAlt : string | undefined;

  ngOnInit(): void {
    this.imageAlt = `image_${this.name}`;
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
