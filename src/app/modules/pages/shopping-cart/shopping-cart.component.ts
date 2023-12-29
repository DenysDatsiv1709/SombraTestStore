import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { selectCart } from '../../../core/store/products.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../../core/models/product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts$: Observable<Product[]>;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.cartProducts$ = this.store.select(selectCart)
      .pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  navigateToMain() {
    this.router.navigate(['dashboard']);
  }

}
