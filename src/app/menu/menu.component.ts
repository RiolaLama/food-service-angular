import { Component, OnInit } from '@angular/core';
import { foods } from '../food/foodArr';
import { IFood } from "../food/IFood";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../service/food.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foods: Array<IFood> = foods;


  constructor(private route: ActivatedRoute,
    private foodService: FoodService) { }

  ngOnInit(): void {
  }

  addToCart(obj: IFood) {
    window.alert('Your product has been added to cart!');
    this.foodService.addToCart(obj);
  }

}
