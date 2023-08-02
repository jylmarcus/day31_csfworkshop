import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  @Input() cart!: {item: string, quantity: number}[];

  removeItem(item:string){
    let index = this.cart.findIndex(obj => obj.item === item);
    this.cart.splice(index, 1);
  }
}
