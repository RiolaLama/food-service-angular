import { Component, OnInit } from '@angular/core';
import {IFood} from "../food/IFood";
import {FoodService} from "../service/food.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderedFoods: Array<IFood> = [];
  total: number = 0;
  look: number = 0;
  bth: number = 0;
  free: number = 0;
  one: number = 0;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.orderedFoods = this.foodService.getCart();
    this.total = this.foodService.sumTotal();
    this.look = this.foodService.service();
    this.bth = this.foodService.booth();
    this.free = this.foodService.fre();
    this.one = this.foodService.last();
  }

}
