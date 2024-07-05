import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';

@Component({
  selector: 'app-profile-recipe',
  standalone: true,
  imports: [
    RecipeItemComponent
  ],
  templateUrl: './profile-recipe.component.html',
  styleUrl: './profile-recipe.component.scss'
})
export class ProfileRecipeComponent implements OnInit {
  count : number | undefined;
  recipes : any | undefined;

  ngOnInit(): void {
    this.count = 0;

    this.recipes = [
      {id : 1, name : "Faire une salade", detail : "Petit déjeuner", date : "12/03/2024"},
      {id : 2, name : "Faire une salade", detail : "Petit déjeuner", date : "12/03/2024"},
      {id : 3, name : "Faire une salade", detail : "Petit déjeuner", date : "12/03/2024"},
      {id : 4, name : "Faire une salade", detail : "Petit déjeuner", date : "12/03/2024"},
      {id : 5, name : "Faire une salade", detail : "Petit déjeuner", date : "12/03/2024"},
    ]
  }
}
