import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent {

  @Input() value: number;

  getStars(rating: number): number[] {
    return [...Array(Math.floor(rating)).keys()];
  }

}
