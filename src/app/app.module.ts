import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TutorialDocsLinkComponent } from './tutorial-docs-link/tutorial-docs-link.component';
import { DeployedAppLinkComponent } from './deployed-app-link/deployed-app-link.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // This is where new routes are registered! You can add a component here as soon as it is created!
    // You will also need a [router-link] property put in one of the views.
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
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
    CartComponent
  ],
  bootstrap: [ AppComponent ],
  exports: [ProductAlertsComponent, ProductDetailsComponent, TutorialDocsLinkComponent, DeployedAppLinkComponent, CartComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/