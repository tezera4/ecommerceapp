import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductModel } from '../model/create-product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get("/api/BigBasket/GetAllProducts");
  }

  getAllCategory()
  {
    return this.http.get("/api/BigBasket/GetAllCategory");
  }
  createProduct(product:CreateProductModel){
    return this.http.post("/api/BigBasket/CreateProduct",product);
  }
}
