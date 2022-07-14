import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppFooterModule,
  AppHeaderModule,
  AppSidebarModule,
} from "@coreui/angular";
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ProductsComponent } from '../pages/products/products.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DashboardComponent,SidebarComponent],
  imports: [
    CommonModule,
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    ButtonModule,
    DividerModule,
    RouterModule
  ]
})
export class DashboardModule { }
