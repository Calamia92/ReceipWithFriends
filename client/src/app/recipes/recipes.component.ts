import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

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
  recipes : any | undefined;

  ngOnInit(): void {
    
    // à remplacer par les donnée du services
    this.recipes = [
      {id : 1, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 2, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 3, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 4, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 5, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 6, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 7, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 8, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 9, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 10, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 11, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"},
      {id : 12, name : "Poulet à la moutarde", imagePath : "https://cdn-icons-png.flaticon.com/512/7715/7715582.png"}
    ]
  }
}
