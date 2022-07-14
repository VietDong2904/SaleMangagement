import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../layout/dashboard/item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navItems: Item[] = [
    
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
      name: 'Báo cáo thống kế',
      icon: 'pi-chart-bar',
      link: 'reports'
    }
  ]    
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(item : Item) {
    this.router.navigate(['dashboard/'+item.link])
  }

}
