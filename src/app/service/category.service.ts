import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http:HttpClient) { }
  getAllCategory(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory");
  }
}
