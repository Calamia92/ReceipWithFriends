import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../../services/recepie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any; 
  image: string = 'https://cdn-icons-png.flaticon.com/512/7715/7715582.png'; 

  constructor(
    private recetteService: RecetteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const recipeId = params.get('id'); 

      if (recipeId) {
        this.recetteService.getRecette(recipeId)
          .then(data => {
            this.recipe = data;
            this.image = data.image || this.image; 
          })
          .catch(error => {
            console.error('Error fetching recipe:', error);
          });
      }
    });
  }
}
