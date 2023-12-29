import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product.interface';
import { Store } from '@ngrx/store';
import { selectCart } from '../../../core/store/products.state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  cartProducts$: Observable<Product[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cartProducts$ = this.store.select(selectCart);
  }

}
