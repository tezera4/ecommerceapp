import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebProductComponent } from './pages/website/web-product/web-product.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Allproducts',
    pathMatch: 'full',
  },
  // {
  //   path: 'shop',
  //   component: LandingComponent,
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'',
    component: LandingComponent,
    children:[
      {
        path: 'Allproducts',
        component: WebProductComponent,
      },
      {
        path:'productcategory/:id',
        component:CategoryProductsComponent
      }

    ]

  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      
      {
        path: 'product',
        component: ProductsComponent,
      },
      
      {
        path: 'order',
        component: OrderComponent,
      },
    ],
  },
];
