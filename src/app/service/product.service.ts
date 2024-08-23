import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductModel } from '../model/create-product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  updateProduct(createProductModel: CreateProductModel) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/BigBasket/UpdateProduct",createProductModel);
  }

  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/BigBasket/GetAllProducts");
  }

  getAllCategory()
  {
    return this.http.get("https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory");
  }
  createProduct(product:CreateProductModel){
    return this.http.post("https://freeapi.miniprojectideas.com/api/BigBasket/CreateProduct",product);
  }
  deleteProduct(productId:any)
  {
    return this.http.get("https://freeapi.miniprojectideas.com/api/BigBasket/DeleteProductById?id="+productId);
  }
}
