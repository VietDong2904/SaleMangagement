import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  menuItems: MenuItem[]
  stt = 0
  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
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
