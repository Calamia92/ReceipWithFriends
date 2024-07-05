import { Component, Input, OnInit } from '@angular/core';

export interface Recipe {
  name: string;
  detail: string;
  date: string;
}

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  name: string | undefined;
  detail: string | undefined;
  date: string | undefined;

  ngOnInit(): void {
    if (this.recipe) {
      this.name = this.recipe.name;
      this.detail = this.recipe.detail;
      this.date = this.recipe.date;
    }
  }
}
