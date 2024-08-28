import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductModel } from '../../../model/all-product-model';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  private productService=inject(ProductService);
  productCategoryId:any;
  productCategoryListById={
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
constructor(private activatedRoute:ActivatedRoute){
  this.activatedRoute.params.subscribe(
    res=>{     
      this.productCategoryId=res;
      console.log("Activated by tezera======",this.productCategoryId.id);
      this.getProductByCategoryId(this.productCategoryId.id);
      
    }
  )

}
getProductByCategoryId(id:number){
  this.productService.getProductByCategoryId(id).subscribe(
    (res:any)=>{
      // console.log("this.productCategoryListById==",this.productCategoryListById);
      this.productCategoryListById=res;
    }
  )
}
}
