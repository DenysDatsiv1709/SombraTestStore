import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { ShoppingCartComponent } from './modules/pages/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './modules/components/nav-bar/nav-bar.component';
import { ProductCardComponent } from './modules/components/product-card/product-card.component';
import { FiltrationComponent } from './modules/components/filtration/filtration.component';
import { ProductDetailsModalComponent } from './modules/components/product-details-modal/product-details-modal.component';
import { ProductRatingComponent } from './modules/components/product-rating/product-rating.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './core/store/products.reducer';
import { ProductsEffects } from './core/store/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/modules/material.module';
import { CustomerReviewComponent } from './modules/components/customer-review/customer-review.component';
import { SearchingComponent } from './modules/components/searching/searching.component';
import { SummaryOrderCardComponent } from './modules/components/summary-order-card/summary-order-card.component';
import { CartSummaryCardComponent } from './modules/components/cart-summary-card/cart-summary-card.component';
import { TotalPricePipe } from './core/pipes/total-price.pipe';
import { TruncatePipe } from './core/pipes/truncate.pipe';
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShoppingCartComponent,
    NavBarComponent,
    ProductCardComponent,
    FiltrationComponent,
    ProductDetailsModalComponent,
    ProductRatingComponent,
    CustomerReviewComponent,
    SearchingComponent,
    SummaryOrderCardComponent,
    CartSummaryCardComponent,
    TotalPricePipe,
    TruncatePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
