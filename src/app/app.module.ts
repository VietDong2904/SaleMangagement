import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { DashboardModule } from './views/layout/dashboard.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { BillsComponent } from './views/pages/bills/bills.component';
import { UsersComponent } from './views/pages/users/users.component';
import { NewsComponent } from './views/pages/news/news.component';
import { ReportsComponent } from './views/pages/reports/reports.component';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { ProductsComponent } from './views/pages/products/products.component';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';
import { CreateEditProductComponent } from './views/pages/products/create-edit-product/create-edit-product.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './views/pages/products/product-detail/product-detail.component';
import {SidebarModule} from 'primeng/sidebar';
import { CategoriesComponent } from './views/pages/products/categories/categories.component';
import { CreateEditCategoryComponent } from './views/pages/products/categories/create-edit-category/create-edit-category.component';
import { FieldCommonComponent } from './core/field-common/field-common.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ProfileComponent } from './views/pages/profile/profile.component';
import { NoDataComponent } from './core/no-data/no-data.component';
import { PaginatorModule } from "primeng/paginator";
import { HomeUserComponent } from './views/website/home-user/home-user.component';
import {BadgeModule} from 'primeng/badge';


@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    UsersComponent,
    NewsComponent,
    ReportsComponent,
    HomeComponent,
    ProductsComponent,
    CreateEditProductComponent,
    ProductDetailComponent,
    CategoriesComponent,
    CreateEditCategoryComponent,
    FieldCommonComponent,
    ProfileComponent,
    NoDataComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    NgxCaptchaModule,
    DashboardModule,
    RouterModule,
    PanelModule,
    CardModule,
    MenubarModule,
    TableModule,
    TabViewModule,
    DividerModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    SidebarModule,
    InputTextareaModule,
    PaginatorModule,
    BadgeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
