import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecetteService } from '../../../services/recette.service';
import { UserService } from '../../../services/user.service';
import { Recipe } from '../recipe-item/recipe-item.component';

@Component({
  selector: 'app-profile-recipe',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './profile-recipe.component.html',
  styleUrls: ['./profile-recipe.component.scss']
})
export class ProfileRecipeComponent implements OnInit {
  count = 0;
  recipes: Recipe[] | undefined; 
  userId: string | null;

  constructor(private recetteService: RecetteService, private authService: UserService) {
    this.userId = this.authService.getCustomerId();
  }

  ngOnInit(): void {
    if (this.userId) {
      this.loadRecipes();
    } else {
      console.error('User ID is null');
    }
  }

  loadRecipes() {
    if (this.userId) {
      this.recetteService.getRecettes(this.userId).then(recipes => {
        this.recipes = recipes;
        this.count = recipes.length;
      }).catch(error => console.error('Erreur lors du chargement des recettes', error));
    } else {
      console.error('Cannot load recipes: User ID is null');
    }
  }
}
