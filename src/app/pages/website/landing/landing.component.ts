import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../service/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { AllProductModel } from '../../../model/all-product-model';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  private productService = inject(ProductService);
  private route=inject(Router);
 
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
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

  onclickCategoryName(id:number){
    console.log("onclickCategoryName clicked==========="+id)
    this.route.navigate(['/productcategory',id]);

  }
  // loginObj: loginObject = new loginObject();
  // userLoginObj: userLoginObject = new userLoginObject();
  // registerObj: registerObject = new registerObject();
  // profileObj: userProfileObject = new userProfileObject();
  loggedInObj: any = {};
  displayModalLogin: boolean = false;
  displayModalRegistration: boolean = false;
  displayModalProfile: boolean = false;
  rememberMe: boolean = false;
  showLoginPassword: boolean = false;
  showRegisterPassword: boolean = false;
  showProfilePassword: boolean = false;
  isApiCallInProgress: boolean = false;
  // constructor(private prodSrv: ProductService, private router: Router, public loginSrv: LoginService, private http: HttpClient) {
  //   const localData = sessionStorage.getItem('bigBasket_user');
  //   if (localData !== null) {
  //     this.loggedInObj = JSON.parse(localData);
  //     this.getCartByCustomerId(this.loggedInObj.custId);
  //   }
  //   this.prodSrv.cartUpdated$.subscribe((res: any) => {
  //     if (res) {
  //       this.getCartByCustomerId(this.loggedInObj.custId);
  //     }
  //   });

  //   const rememberLoginInfo = sessionStorage.getItem('rememberMeUser');
   
  // }
  productList: any[] = [];
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
  categoryList: any[] = [];
  cartList: any[] = [];

  getAllProducts() {
    this.productService.getAllProduct().subscribe((res: any) => {
      // debugger;
      if (res.result) {
        this.productList2 = res;
        console.log("Tezera you working great======",res);
      }
    });
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe((res: any) => {
      // Get top-level categories (parentCategoryId = 0)
      this.categoryList = res.data.filter((list: any) => list.parentCategoryId === 0);
      console.log("Teze is working hard 2",this.categoryList);
    });
  }

  // resetSubcategories() {
  //   // Reset subcategories for all parent categories
  //   this.categoryList.forEach((category: any) => {
  //     category.subcategories = undefined;
  //   });
  // }
  // loadSubcategories(parentCategory: any) {
  //   // Reset subcategories for all other parent categories
  //   this.categoryList.forEach((category: any) => {
  //     if (category !== parentCategory) {
  //       category.subcategories = undefined;
  //     }
  //   });
  //   // Fetch subcategories for the given parentCategoryId
  //   if (!parentCategory.subcategories) {
  //     setTimeout(() => {
  //       this.prodSrv.getAllCategory().subscribe((res: any) => {
  //         const subcategories = res.data.filter((list: any) => list.parentCategoryId === parentCategory.categoryId);
  //         // Update the corresponding parent category with subcategories
  //         parentCategory.subcategories = subcategories;
  //         // console.log(subcategories);
  //       });
  //     }, 100);
  //   }
  // }

  // navigateToProducts(id: number) {
  //   this.router.navigate(['/products', id]);
  // }

  // calculateTotalSubtotal() {
  //   let totalSubtotal = 0;
  //   for (const item of this.cartList) {
  //     totalSubtotal += (item.productPrice * item.quantity);
  //   }
  //   return totalSubtotal;
  // }
  // getCartByCustomerId(custId: number) {
  //   this.prodSrv.getCartDataByCustId(custId).subscribe((res: any) => {
  //     if (res.result) {
  //       this.cartList = res.data;
  //     }
  //   });
  // }


  // remove(cartId: number) {
  //   this.prodSrv.removeProductByCartId(cartId).subscribe((res: any) => {
  //     this.getCartByCustomerId(this.loggedInObj.custId);
  //     this.prodSrv.cartUpdated$.next(true);
  //     // this.toastr.error(res.message);
  //   });
  // }

  // openProfileModal() {
  //   this.displayModalProfile = true;
  //   this.getCustomerByCustomerId();
  // }
  // getCustomerByCustomerId() {
  //   this.prodSrv.getCustomerById(this.loggedInObj.custId).subscribe((res: any) => {
  //     if (res.result) {
  //       this.profileObj = res.data;
  //     }
  //   });
  // }
  // openLoginModal() {
  //   this.displayModalLogin = true;
  // }
  // openRegisterModal() {
  //   this.displayModalRegistration = true;
  // }
  

}


// export class loginObject {
//   UserName: string;
//   UserPassword: string;

//   constructor() {
//     this.UserName = '';
//     this.UserPassword = '';
//   }
// }

// export class userLoginObject {
//   EmailId: string;
//   Password: string;

//   constructor() {
//     this.EmailId = 'rinku@gmail.com';
//     this.Password = 'Rinku@1';
//   }
// }

// export class registerObject {
//   CustId: number;
//   Name: string;
//   MobileNo: string;
//   Password: string;

//   constructor() {
//     this.CustId = 0;
//     this.Name = '';
//     this.MobileNo = '';
//     this.Password = '';
//   }
// }

// export class userProfileObject {
//   custId: number;
//   name: string;
//   mobileNo: string;
//   password: string;

//   constructor() {
//     this.custId = 0;
//     this.name = '';
//     this.mobileNo = '';
//     this.password = '';
//   }
// }

