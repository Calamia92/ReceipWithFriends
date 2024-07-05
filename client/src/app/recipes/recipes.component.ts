import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecetteService } from '../../services/recette.service';
@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    RecipeCardComponent,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})


export class RecipesComponent implements OnInit {

  // à remplacer par les donnée du services
  recipes : any[] = [];
  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.recetteService.getRecettes()
    .then(recipes => this.recipes = recipes);
  }
}