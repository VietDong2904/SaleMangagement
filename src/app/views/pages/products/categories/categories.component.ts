import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';
import { CategoriesService } from './categories.service';
import { Category } from './category.interface';
import { CreateEditCategoryComponent } from './create-edit-category/create-edit-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = []
  listProducts: Product[] = []
  constructor(
    private categoriesService: CategoriesService,
    private dialogService : DialogService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(data)
    });
  }
  openNewCategory() {
    this.dialogService.open(CreateEditCategoryComponent, {
      header: "Tạo mới danh mục sản phẩm",
      width: "50%"
    })
  }

  openEditCategory() {
    this.dialogService.open(CreateEditCategoryComponent, {
      header: "Chỉnh sửa danh mục sản phẩm",
      width: "50%"
    })
  }

  openDeleteCategory(item: Category) {

  }

  changeTable(item: Category) {
    
  }

}
