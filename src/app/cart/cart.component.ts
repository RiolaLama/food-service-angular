import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { IFood } from '../food/IFood';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: IFood[] = [];
  total: any = 0
  constructor(private foodService: FoodService) { }

  removeItem(index: any) {
    this.foodService.removeItem(this.cart[index]);
    this.updateCart();
  }
  increaseQuantity(id: number) {
    this.foodService.increaseQuantity(id)
    this.updateCart();
  }
  decreaseQuantity(id: number) {
    this.foodService.decreaseQuantity(id)
    this.updateCart();
  }
  clearCart() {
    this.foodService.clearCart();
    this.updateCart();
  }
  ngOnInit(): void {
    this.updateCart();
  }
  private updateCart() {
    this.cart = this.foodService.getCart();
    this.total = this.foodService.getTotal();
  }
}
