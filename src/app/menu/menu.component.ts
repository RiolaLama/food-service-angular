import { Component, OnInit } from '@angular/core';
import { foods } from '../food/foodArr';
import { IFood } from "../food/IFood";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../service/food.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foods: Array<IFood> = foods;


  constructor(private route: ActivatedRoute,
    private foodService: FoodService) { }
    selectedCategory: string = 'breakfast'; 
  ngOnInit(): void {
  }
  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  getFilteredFoods(): IFood[] {
    return this.selectedCategory
      ? this.foods.filter(food => food.category === this.selectedCategory)
      : this.foods;
  }


  addToCart(obj: IFood) {

    let isNewItem = this.foodService.addToCart(obj);
    if (isNewItem) {
      Swal.fire({
        title: "Your product has been added to cart!",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "The product is already in the cart!",
        text: "Quantity has been increased!",
        icon: "success"
      });
    }
  }

}
