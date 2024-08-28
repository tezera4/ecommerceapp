import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CreateProductModel } from '../../../model/create-product-model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  ngOnInit(): void {
    // this.getAllCategory();
    // this.getAllProduct();
  }

  allCategoryList = {
    message: '',
    result: true,
    data: [
      {
        categoryId: 55,
        categoryName: 'Fruits & Vegetables',
        parentCategoryId: 0,
        userId: null,
      },
    ],
  };
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
  selectedfromDropDown: any;
  isSideformVisible = false;
  createProductModel: CreateProductModel = {
    ProductId: 0,
    ProductSku: '',
    ProductName: '',
    ProductPrice: 0,
    ProductShortName: '',
    ProductDescription: '',
    CreatedDate: '',
    DeliveryTimeSpan: '',
    CategoryId: 0,
    ProductImageUrl: '',
    UserId: 0,
  };
  makeNewFormVIsible(val: any) {
    if (val == 'open') {
      this.isSideformVisible = true;
    } else {
      this.isSideformVisible = false;
    }
  }
  SaveProduct() {
    this.productService
      .createProduct(this.createProductModel)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Product created successfully');
          this.getAllProduct();
        } else {
          alert('THere is an error');
        }
      });
  }
  getAllCategory() {
    this.productService.getAllCategory().subscribe(
      (res: any) => {
        // console.log("All Category",res);
        this.allCategoryList = res;
      },
      (error) => {
        console.log('All Category error', error);
      }
    );
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(
      (res: any) => {
        // console.log("All Product",res);
        this.allProductList = res;
      },
      (error) => {
        console.log('All Product error', error);
      }
    );
  }
  OnEdit(item: any) {
    console.log('item.ProductName====', item.ProductName);
    this.createProductModel = item;
    this.isSideformVisible = true;
  }
  OnDelete(item: any) {
    if(confirm("Are you sure you want purge===?")){
      this.productService.deleteProduct(item.productId).subscribe(
        (res: any) => {
          // console.log("All Product",res);
          // this.allProductList = res;
          if (res.result) {
            alert('Deleted Successfully===');
          } else {
            alert('not Deleted because of ===');
          }
        },
        (error:any)=> {
          alert('not Deleted because of ===');
        }
      );
    }
    
  }
  onUpdateProduct() {
    this.productService
      .updateProduct(this.createProductModel)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Product created successfully');
          this.getAllProduct();
        } else {
          alert('THere is an error');
        }
      });
  }
}
