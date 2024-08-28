import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductModel } from '../model/create-product-model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  updateProduct(createProductModel: CreateProductModel) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/BigBasket/UpdateProduct",createProductModel);
  }

  constructor(private http:HttpClient) { }
  public cartUpdated$: Subject<boolean> = new Subject();

  getAllProduct(){
    // debugger;
    return this.http.get("https://freeapi.miniprojectideas.com/api/BigBasket/GetAllProducts");
  }

  getAllCategory()
  {
    return this.http.get("https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory");
  }
  getProductByCategoryId(id:number)
  {
    return this.http.get("https://freeapi.miniprojectideas.com/api/BigBasket/GetAllProductsByCategoryId?id="+id);
  }
  createProduct(product:CreateProductModel){
    return this.http.post("https://freeapi.miniprojectideas.com/api/BigBasket/CreateProduct",product);
  }
  deleteProduct(productId:any)
  {
    return this.http.get("https://freeapi.miniprojectideas.com/api/BigBasket/DeleteProductById?id="+productId);
  }

  
  addToCart(obj: any): Observable<any> {
    return this.http.post<any>("https://freeapi.miniprojectideas.com/api/BigBasket/AddToCart", obj);
  }

  getCartDataByCustId(custId: number): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/BigBasket/GetCartProductsByCustomerId?id=" + custId);
  }

  removeProductByCartId(cartId: number): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/BigBasket/DeleteProductFromCartById?id=" + cartId);
  }
  getCustomerById(custId: number): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/BigBasket/GetCustomerById?id=" + custId);
  }
}
