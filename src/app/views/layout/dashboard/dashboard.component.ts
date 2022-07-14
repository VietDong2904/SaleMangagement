import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Item } from './item.interface';

@Component({
  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string ='VietDong'
  item: Item[] = []
  name:string =''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLogout() {
    this.router.navigate(['/login'])
  }
  openProfile() {
    this.router.navigateByUrl('dashboard/profile')
  }
  


}
