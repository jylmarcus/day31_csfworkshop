import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent {
  inventory: string[] = [`Ifrit`, `Titan`, `Garuda`, `Leviathan`];

  @Output() onAddItem: EventEmitter<string> = new EventEmitter();

  addItemToCart(item: string) {
    this.onAddItem.emit(item);
    console.log(item);
  }
}
