import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../../core/models/product.interface';
import { ProductDetailsModalComponent } from '../product-details-modal/product-details-modal.component';
import { take, takeUntil } from 'rxjs/operators';
import { finalize, Subject } from 'rxjs';
import * as productsActions from '../../../core/store/products.actions';
import { selectProductById } from '../../../core/store/products.state';
import { Store } from '@ngrx/store';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent{

  @Input() product: Product;
  private unsubscribe$: Subject<void> = new Subject<void>();


  constructor(private dialog: MatDialog,        private snackbarService: SnackbarService
  ,private store: Store,
  ) {
  }

  openDialog(): void {
    const productId = this.product.id;

    this.dialog.open(ProductDetailsModalComponent, {
      width: '90vw',
      height: '90vh',
      data: { productId: productId }
    });
  }
  get selectedProduct$() {
    return this.store.select(selectProductById(this.product.id));
  }

  addToCart() {
    event.stopPropagation()
    this.selectedProduct$.pipe(
      take(1),
      takeUntil(this.unsubscribe$),
    ).subscribe((product) => {
      this.store.dispatch(productsActions.addToCart({ product }));
      this.snackbarService.showSnackbar(`${product.name} was successfully added to the cart`);
    });
  }
}
