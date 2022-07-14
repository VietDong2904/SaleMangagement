import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INavData } from "@coreui/angular";
import { SidebarNavService } from '@coreui/angular/lib/sidebar/app-sidebar-nav.service';
import { Item } from '../dashboard/item.interface';

@Component({
  selector: 'app-1sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public sidebarMinimized = false;
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
  constructor() { }

  ngOnInit(): void {
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

 
}
