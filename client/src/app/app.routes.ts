import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRecipeComponent } from './profile/profile-recipe/profile-recipe.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipe/:id', component: RecipeDetailComponent },
    {path : 'favorite', component : FavoriteComponent},
    {path : 'profile', component : ProfileComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile/recipes', component: ProfileRecipeComponent },
];
