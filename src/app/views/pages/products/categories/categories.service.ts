import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  readonly categoryUrl: string = 'https://62cfd30bd9bf9f17057d1bab.mockapi.io/api/v2/'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<any>(this.categoryUrl + '/category');
  }
  getCategoryById(id): Observable<Category> {
    return this.http.get<any>(this.categoryUrl + '/category/' + `${id}`)
  }
}
