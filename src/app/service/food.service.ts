import {Injectable} from '@angular/core';
import {IFood} from "../food/IFood";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  card: Array<IFood> = [];
  total: number = 0;
  look: number = 0;
  bth: number = 0;
  free: number = 0;
  one: number = 0;

  constructor() {
  }
  addToCart(food: IFood) {
    this.card.push(food);
  }

  getCart() {
    return this.card;
  }

  clearCart() {
    this.card = [];
    return this.card;
  }
  sumTotal() {
    this.total = 0;
    for (let val of this.card) {
      this.total += val.price;
    }
    return this.total;
  }

  service() {
    for (let val of this.card) {
      this.look += val.price * 0.1;
    }
    return this.look;
  }

  booth() {
    for (let val of this.card) {
      this.bth = this.look + this.total;
    }
    return this.bth;
  }

  fre() {
    if (this.total > 40) {
      this.free = this.total * 0.15;
    }
    return this.free;
  }

  last() {
    if (this.total > 40) {
      this.one = this.bth - this.free;
    }
    return this.one;
  }
}

