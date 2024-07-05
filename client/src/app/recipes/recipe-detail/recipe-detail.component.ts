import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit{
  image : String | undefined;

  ngOnInit(): void {
    this.image = "https://cdn-icons-png.flaticon.com/512/7715/7715582.png";
  }
}
