import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/ProductModel';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: Product[], searchProductName: String): Product[] {
    if(searchProductName == undefined){
      return value;
    }
    return value.filter(product => product.productTitle.toLocaleLowerCase().includes(searchProductName.toLocaleLowerCase()));
  }

}
