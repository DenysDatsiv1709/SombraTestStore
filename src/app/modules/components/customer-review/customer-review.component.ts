import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../../core/models/product.interface';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss']
})
export class CustomerReviewComponent  {
  @Input() review: Review;
  showFullComment = false;

  shouldDisplayButton(): boolean {
    return this.review.comment.length > 300;
  }

}


