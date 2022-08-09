import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.component.html',
  styleUrls: ['./product-list-details.component.css']
})
export class ProductListDetailsComponent implements OnInit {

  productList! : Product[];
  productImgWidth = 100;
  productImgHeight = 80;
  prodductSearchValue = "";
  isProductImgHideShowText = "Hide";
  isProductImgShow = true;
  alertMsg = "";

  constructor() { }

  ngOnInit(): void {
    this.productList = this.getProductList();
    console.table(this.productList);
  }

  hideShowProductImages(){
    this.isProductImgShow = !this.isProductImgShow;
    if(this.isProductImgShow){
      this.isProductImgHideShowText = "Hide";
    }else {
      this.isProductImgHideShowText = "Show";
    }
  }

  buyNow(product : Product) {
    if(product.initBuyOty > product.productQty){
      this.alertMsg = "Hey you can not buy more than " + product.productQty;
    }else {
      this.alertMsg = "Thank you for the buying ( " + product.productTitle + " : " + product.productPrice + " * " + product.initBuyOty + " ) Total Amount = " + product.productPrice * product.initBuyOty;
    }
    console.log(this.alertMsg);
  }

  getProductList() : Product[]{
    return [
      {
        productID : "1",
        productImgPath : "/assets/air-image.jpeg",
        productTitle : "Macbook-Air-2015",
        productQty : 10,
        productPrice : 50000,
        productColor : "Black",
        productInStoke :true,
        initBuyOty : 0
      },
      {
        productID : "2",
        productImgPath : "/assets/iphone-image.jpeg",
        productTitle : "iphone-12",
        productQty : 15,
        productPrice : 60000,
        productColor : "Grey",
        productInStoke : true,
        initBuyOty : 0
      },
      {
        productID : "3",
        productImgPath : "/assets/air-image.jpeg",
        productTitle : "AirTag",
        productQty : 5,
        productPrice : 7000,
        productColor : "Black",
        productInStoke : false,
        initBuyOty : 0
      },
      {
        productID : "4",
        productImgPath : "/assets/air-image.jpeg",
        productTitle : "Macbook-Pro-2020",
        productQty : 20,
        productPrice : 110000,
        productColor : "Space-Grey",
        productInStoke : true,
        initBuyOty : 0
      },
      {
        productID : "5",
        productImgPath : "/assets/air-image.jpeg",
        productTitle : "Macbook-Pro-M1",
        productQty : 10,
        productPrice : 125000,
        productColor : "Black",
        productInStoke : true,
        initBuyOty : 0
      },
      {
        productID : "6",
        productImgPath : "/assets/iphone-image.jpeg",
        productTitle : "iPhone -13",
        productQty : 40,
        productPrice : 75000,
        productColor : "White",
        productInStoke : true,
        initBuyOty : 0
      },
      {
        productID : "7",
        productImgPath : "/assets/air-image.jpeg",
        productTitle : "iPad - Mini",
        productQty : 30,
        productPrice : 40000,
        productColor : "Black",
        productInStoke : true,
        initBuyOty : 0
      }
    ];
  }

}
