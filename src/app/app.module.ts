// This file contains imports and functionality that is available to the entire app.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// I am GUESSING, that this only brings HttpClientModule from node_modules to THIS file...
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TutorialDocsLinkComponent } from './tutorial-docs-link/tutorial-docs-link.component';
import { DeployedAppLinkComponent } from './deployed-app-link/deployed-app-link.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // ...Then HERE is where it is actually brought into the app!
    HttpClientModule,
    // This is where new routes are registered! You can add a component here as soon as it is created!
    // You will also need a [router-link] property put in one of the views.
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TutorialDocsLinkComponent,
    DeployedAppLinkComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [ AppComponent ],
  // What is exports here? Apparently this is NOT necessary for this Tutorial App to function...????
  // exports: [ProductAlertsComponent, ProductDetailsComponent, TutorialDocsLinkComponent, DeployedAppLinkComponent, CartComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/