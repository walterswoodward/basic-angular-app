import { Component, OnInit } from '@angular/core';
// Have to first import Input in order to use @input to bring in product object values from products.ts
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  // Need this in order to be able to access products.ts values in products-alerts.component.html
  // @Input indicates that the property "product" will be passed in from the components PARENT e.g. product-list
  // SO...this means that you will only ever see @Input used for a property that has ALREADY been brought into the
  // view on a higher level e.g. product, which is in the product-list component view via *ngFor="let product of products"
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {
    
  }

  ngOnInit() {
  }

}
