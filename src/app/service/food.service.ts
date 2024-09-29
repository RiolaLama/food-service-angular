import { Injectable } from '@angular/core';
import { IFood } from "../food/IFood";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  cart: Array<IFood> = JSON.parse(localStorage.getItem('cartItems') || "[]");
  total: number = this.calculateTotal();


  constructor() {
  }
  addToCart(food: IFood): boolean {
    let item = this.cart.find(i => i.id === food.id);
    if (item) {
      item.quantity++;
      this.saveCart();
      return false;
    } else {
      this.cart.push({ ...food, quantity: 1 });
      this.saveCart();
      return true;
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    return this.cart;
  }

  removeItem(item: any) {
    this.cart.splice(this.cart.indexOf(item), 1);
    this.saveCart();
  }
  increaseQuantity(id: number) {
    let item = this.cart.find(i => i.id === id)
    if (item) {
      item.quantity++
      this.saveCart();
    }
  }
  decreaseQuantity(id: number) {
    let item = this.cart.find(i => i.id === id)
    if (item) {
      item.quantity--
      if (item.quantity <= 0) {
        this.removeItem(item);
      } else {
        this.saveCart();
      }
    }
  }

  getTotal() {
    this.total = this.calculateTotal();
    return this.total;
  }

  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
    this.total = this.calculateTotal();
  }

  private calculateTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  
}

