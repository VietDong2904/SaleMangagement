import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from './product.interface';
import { DialogService } from "primeng/dynamicdialog";
import { CreateEditProductComponent } from './create-edit-product/create-edit-product.component';
import { Router } from '@angular/router';
import { Item } from '../../layout/dashboard/item.interface';
import { CategoriesComponent } from './categories/categories.component';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { Paginator } from "primeng/paginator";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService]

})
export class ProductsComponent implements OnInit {
  menuItems: MenuItem[];
  @ViewChild("paginator") paginator: Paginator;

  navItems: Item[] = [
    {
      name: 'Tổng quan',
      icon: 'pi-eye',
      link: 'home',
    },
    {
      name: 'Hàng hóa',
      icon: 'pi-shopping-bag',
      link: 'products'
    },
    {
      name: 'Hóa đơn',
      icon: 'pi-file',
      link: 'bills'
    },
    {
      name: 'Khách hàng',
      icon: 'pi-users',
      link: 'users'
    },
    {
      name: 'Tin tức',
      icon: 'pi-book',
      link: 'news'
    },
    {
      name: 'Báo cáo thống kê',
      icon: 'pi-chart-bar',
      link: 'reports'
    }
  ] 
  buuPhamPreviewData: any;
  visiblePreview = false;
  listProducts: Product[]  ;
  constructor(
    public dialogService: DialogService,
    private router: Router,
    private productService: ProductService
  ) { }
  public product: Product = null
  countProduct: number
  name: Product
  stt = 0;
  ngOnInit(): void {
    this.getProducts()
    this.menuItems = [
      {
        label: "Tạo mới",
        icon: "pi pi-plus",
        command: () => {
          this.openNew();
        }
      },
      {
        label: "Tùy chỉnh bảng",
        icon: "pi pi-cog",
        command: () => {}
      },
      {
        label: "Xuất excel",
        icon: "pi pi-file-excel",
        command: () => {}
      },
      {
        label: "Import",
        icon: "pi pi-file",
        command: () => {}
      }
    ];
  }

  openNew() {
    this.dialogService.open(CreateEditProductComponent, {
      header: "Tạo mới sản phẩm",
      width: "50%",
    });
  }

  openNewCategory() {
    this.dialogService.open(CategoriesComponent, {
      header: "Tạo mới danh mục sản phẩm",
      width: "50%"
    })
  }

  openEditCategory() {
    this.dialogService.open(CategoriesComponent, {
      header: "Chỉnh sửa danh mục sản phẩm",
      width: "50%"
    })
  }

  openEdit(i: Product) {
    this.dialogService.open(CreateEditProductComponent, {
      header: "Chỉnh sửa thông tin sản phẩm",
      width: "50%",
    });
  }

  onDelete(id: number) {
    this.productService.deleteProductById(id).subscribe(res => {
      // this.listProducts = this.listProducts.filter(item => item.ProductId != id);
      this.getProducts()
    })
  }

  getProduct(id: number) {
    this.productService.getProductById(id)
  }
  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.listProducts = data;
      this.countProduct = data.length
      console.log(data)
    });
  }
  // getListToa(page: number, take: number) {
  //   this.primengTableHelper.isLoading = true;
  //   this.toaService
  //     .getListToaNha(take, page)
  //     .pipe(takeUntil(this.destroy))
  //     .subscribe(res => {
  //       this.primengTableHelper.records = res.results;
  //       this.primengTableHelper.totalRecords = res.total;
  //       this.primengTableHelper.isLoading = false;
  //       this.cdr.detectChanges();
  //     });
  // }


  productDetail(product: Product) {
    this.getProduct(product.ProductId)
    console.log(product)
    this.buuPhamPreviewData = product;
    this.name = product
    this.visiblePreview = true;
  }

}
