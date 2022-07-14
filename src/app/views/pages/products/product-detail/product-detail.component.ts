import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() set displayDialog(value: boolean) {
    this.display = value;
    if (value) {
      this.productService.getProductById(this.giao.ProductId)
    }
  }
  giao: any
  cate: any 
  _nguoiNhan: number
  @Input() name: string
  @Input() set buuPham(value: any) {
    this.giao = value
  }
  
  @Input() categoryName : string

  
  display: boolean;
  @Output() onHide = new EventEmitter<boolean>(null);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }
}
