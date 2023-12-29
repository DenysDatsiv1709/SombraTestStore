import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../../../core/models/product.interface";
import * as productsActions from "../../../core/store/products.actions";
import * as productsSelectors from '../../../core/store/products.state';
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<string>;
  filteredProducts$: Observable<Product[]>;
  page = 1;
  pageSize = 10;

  constructor(private store: Store) {
  }

  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
  }

  ngOnInit() {
    this.filteredProducts$ = this.store.pipe(select(productsSelectors.selectFilteredProducts));
    this.store.dispatch(productsActions.loadProducts());
    this.loading$ = this.store.select(productsSelectors.selectProductsLoading);
    this.error$ = this.store.select(productsSelectors.selectProductsError);
  }
}
