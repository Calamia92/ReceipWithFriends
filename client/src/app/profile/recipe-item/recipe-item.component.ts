import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent implements OnInit {
  // à remplacer par les datas du service
  @Input() recipe : any | undefined;
  name : String | undefined;
  detail : String | undefined;
  date : String | undefined;

  ngOnInit(): void {
    this.name = this.recipe.name;
    this.detail = this.recipe.detail;
    this.date = this.recipe.date;
  }
}
