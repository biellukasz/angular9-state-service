import { Component } from '@angular/core';
import {InventoryService} from './inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  state$ = this.inventoryService.getState;
  constructor(private inventoryService: InventoryService) {}


  onSubmit({quantity}) {
    this.inventoryService.addProduct(quantity);
  }
}
