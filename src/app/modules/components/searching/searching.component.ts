import { Component } from '@angular/core';
import * as productsActions from "../../../core/store/products.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: 'searching-bar',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent {

  searchedName: string = '';

  constructor(private store: Store) {
  }

  onFilterByName(): void {
    this.store.dispatch(productsActions.filterProductsByName({ selectedName: this.searchedName }));
  }

}
