import { CartService } from 'src/app/_services/cart.service';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface Product{
  id:string,
  title:string,
  price:number,
  image: string
  category: string
}
const AUTH_TOKEN = window.sessionStorage.getItem('auth-token')
const httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': `${AUTH_TOKEN}` })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: Product[] = [];

  API_product="https://backend-kasi-dx9e1j2jg-tommyteavee.vercel.app/api/products"

  constructor( private http: HttpClient
     ) { }

  getMenu(id: string | null): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_product+`/menu/${id}`).pipe();
  }

  getOneProduct(id: string | null): Observable<Product> {
    return this.http.get<Product>(this.API_product+`/${id}`)
  }

  

 
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_product, product, httpOptions)
  }

  postProduct(data: any ): Observable<any> {
   
    return this.http.post(  this.API_product, data,
    httpOptions);
  }  

  deleteProduct(id: string): Observable<any> {
    const url = `${this.API_product}/${id}`;
  
    return this.http.delete<any>(url, httpOptions)
  }

  updateProduct(id:string | null, data: any):Observable<any>{
    const url = `${this.API_product}/${id}`
    return this.http.put<any>(url, data, httpOptions)
  }

 
}
