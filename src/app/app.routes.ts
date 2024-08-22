import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { ProductsComponent } from './pages/admin/products/products.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

    },
    {
        path:'login',
        component:LoginComponent

    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'product',
                component:ProductsComponent

            },
            {
                path:'order',
                component:OrderComponent

            },

        ]
    }
];
