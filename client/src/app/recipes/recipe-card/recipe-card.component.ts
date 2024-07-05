import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RecetteService } from '../../../services/recette.service';

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
  @Input() image : string | undefined;
  isFavorite : Boolean | undefined;
  imageAlt : string | undefined;

  constructor(private recetteService: RecetteService) {}

  recipes : any[] = [];

  ngOnInit(): void {
    this.recetteService.getRecettes()
    .then(recipes => this.recipes = recipes);
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