import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  searchBox: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private confirmationService: ConfirmationService, private toastr: ToastrService) { }

  login(obj: any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/BigBasket/Login", obj);
  }

  onLogOut(loggedInObj: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want log out?',
      accept: () => {
        loggedInObj = {};
        sessionStorage.removeItem('bigBasket_user');
        sessionStorage.removeItem('token');
        this.toastr.success('You have been logged out', 'Thank you');
      }
    });
  }

  registerCustomer(obj: any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/BigBasket/RegisterCustomer", obj);
  }

  // userTokenLogin(obj: any) {
  //   return this.http.post(Constant.API_END_POINT_USER + Constant.METHODS.USER_TOKEN_LOGIN, obj);
  // }
}
