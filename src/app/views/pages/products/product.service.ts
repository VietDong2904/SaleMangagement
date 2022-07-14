import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly productUrl: string = 'https://625e2f0fd434c6001c57afe1.mockapi.io/api/v1'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any>(this.productUrl + '/users');
  }
  getProductById(id): Observable<any> {
    return this.http.get<any>(this.productUrl + '/users/' + `${id}`)
  }
  deleteProductById(id:number ) {
    return this.http.delete<any>(this.productUrl + '/users/' + `${id}`)
  }
}
