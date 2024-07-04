import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRecipeComponent } from './profile/profile-recipe/profile-recipe.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    // {path : 'favorite', component : LoginComponent},
    {path : 'profile', component : ProfileComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile/recipes', component: ProfileRecipeComponent },
];
