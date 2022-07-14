import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
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
