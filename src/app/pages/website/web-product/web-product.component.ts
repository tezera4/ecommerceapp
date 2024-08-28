import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';
import { AllProductModel } from '../../../model/all-product-model';

@Component({
  selector: 'app-web-product',
  standalone: true,
  imports: [],
  templateUrl: './web-product.component.html',
  styleUrl: './web-product.component.css'
})
export class WebProductComponent  implements OnInit {
  private productService = inject(ProductService);
  private route=inject(Router);
 
  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
  }
  categoryList: any[] = [];
  allProductList = {
    message: '',
    result: true,
    data: [
      {
        productId: 0,
        productSku: '',
        productName: '',
        productPrice: 0,
        productShortName: '',
        productDescription: '',
        createdDate: '',
        deliveryTimeSpan: '',
        categoryId: 0,
        productImageUrl: '',
        categoryName: '',
      },
    ],
  };
  productList2:AllProductModel={
    "message": "",
    "result": true,
    "data": [
      {
        "productId": 0,
        "productSku": "",
        "productName": "",
        "productPrice": 0,
        "productShortName": "",
        "productDescription": "",
        "createdDate": "",
        "deliveryTimeSpan": "",
        "categoryId": 0,
        "productImageUrl": "",
        "categoryName": ""
      }]}; 
  getAllProduct() {
    this.productService.getAllProduct().subscribe(
      (res: any) => {
        // console.log("All Product",res);
        this.productList2 = res;
      },
      (error) => {
        console.log('All Product error', error);
      }
    );
  }
  getAllCategory() {
    this.productService.getAllCategory().subscribe((res: any) => {
      // Get top-level categories (parentCategoryId = 0)
      this.categoryList = res.data.filter((list: any) => list.parentCategoryId === 0);
      console.log("Teze is working hard 2",this.categoryList);
    });
  }

}
