import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/layout/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { BillsComponent } from './views/pages/bills/bills.component';
import { HomeComponent } from './views/pages/home/home.component';
import { NewsComponent } from './views/pages/news/news.component';
import { ProductDetailComponent } from './views/pages/products/product-detail/product-detail.component';
import { ProductsComponent } from './views/pages/products/products.component';
import { ProfileComponent } from './views/pages/profile/profile.component';
import { ReportsComponent } from './views/pages/reports/reports.component';
import { UsersComponent } from './views/pages/users/users.component';
import { HomeUserComponent } from './views/website/home-user/home-user.component';

const routes: Routes = [
  {path: 'home-user', component: HomeUserComponent},
  {path: '', redirectTo: 'home-user', pathMatch: 'full' },
  {path: 'login', component: LoginComponent, loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)},  
  {path: 'dashboard', component: DashboardComponent, 
    children: [
    {path: 'home', 
      component: HomeComponent,
    },
    {path: 'products', 
      component: ProductsComponent
    },
    {path: 'bills', 
      component: BillsComponent
    },
    {path: 'users', 
      component: UsersComponent
    },
    {path: 'news', 
      component: NewsComponent
    },
    {path: 'reports', 
      component: ReportsComponent
    },
    {path: 'productDetail', component: ProductDetailComponent},
    {path: 'profile', 
      component: ProfileComponent,
    },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
