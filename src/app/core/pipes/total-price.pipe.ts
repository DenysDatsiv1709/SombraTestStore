import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.interface';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(products: Product[]): number {
    return products.reduce((sum, product) => sum + product.price, 0);
  }

}
