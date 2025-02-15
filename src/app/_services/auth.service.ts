import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API ='https://backend-kasi-dx9e1j2jg-tommyteavee.vercel.app/api/auth/';

const Produt_Api ="https://backend-kasi-dx9e1j2jg-tommyteavee.vercel.app/kasi/product"

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
providedIn: 'root'})export class AuthService {
constructor(private http: HttpClient) { }
  login(username: string, password: string, ): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username, password
    },
    httpOptions);
  }
  register(username: string, shopName:string, email: string, password: string, image:string,address:string,phone:string ): Observable<any> {
      return this.http.post(AUTH_API + 'signup', {
        username, email, password, image, shopName, address, phone 
      },
      httpOptions);
  }

 
}
