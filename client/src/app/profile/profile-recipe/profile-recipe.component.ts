import { Component } from '@angular/core';
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
export class ProfileRecipeComponent {

}
