import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day31_csfworkshop';

  cart: {item: string, quantity: number}[] = [];

  addItem(item: string) {
    let index = this.cart.findIndex(obj => obj.item === item)
    //if item with value of itemToCheck does not exist, intialize key with value of 1
    if(index == -1) {
      this.cart.push({item: item, quantity: 1});
    } else {
      this.cart[index].quantity +=1;
    }
  }
}
