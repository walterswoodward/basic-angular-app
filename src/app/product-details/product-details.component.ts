import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import { MethodCall } from '@angular/compiler';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  // Note that there are TWO different methods here. This here is
  // a method AND this.cartService.addToCart is ALSO a method.
  // Defining this addToCart here MUST somehow enable you to call
  // it somewhere else within this scope - e.g. the Buy Button
  // inside PDC's view.
  addToCart(bubbles) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(bubbles);
    console.log('What is this?', this);
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
