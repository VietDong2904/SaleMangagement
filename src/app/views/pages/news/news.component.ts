import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  menuItems: MenuItem[]
  stt = 0
  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: "Tạo mới",
        icon: "pi pi-plus",
        command: () => {
          
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

}
