import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from './purchase/purchase.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  this: any;

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
    observe: 'response' as 'response',
  };
  createPurchase(createPurchase: any) {
    return this.http.post('https://indcapstone.herokuapp.com/purchases', createPurchase, this.httpOptions);
  }

  deletePurchases(id: any) {
    return this.http.delete(`https://indcapstone.herokuapp.com/purchases/${id}`,{responseType: 'text'});
  }

  getPurchases(): Observable<any> {
    return this.http.get("https://indcapstone.herokuapp.com/purchases");

  }

  getPurchasesByUser(id: any): Observable<any> {
    return this.http.get(`https://indcapstone.herokuapp.com/purchases/user/${id}`);

  }
  updatePurchases(purchase: Purchase): Observable<any>{
    
    return this.http.patch(`https://indcapstone.herokuapp.com/purchases/${purchase.id}`, purchase);
  }


  getPurchase(id: number): Observable<any> {
    return this.http.get("https://indcapstone.herokuapp.com/purchases/"+id);

  }
//**************************************************************************************** */
  //   createPurchase(createPurchase: any) {
  //   return this.http.post('http://localhost:3000/purchases', createPurchase);
  // }

  // deletePurchases(id: any) {
  //   return this.http.delete(`http://localhost:3000/purchases/${id}`,{responseType: 'text'});
  // }

  // getPurchases(): Observable<any> {
  //   return this.http.get("http://localhost:3000/purchases");

  // }

  // getPurchasesByUser(id: any): Observable<any> {
  //   return this.http.get(`http://localhost:3000/purchases/user/${id}`);

  // }
  // updatePurchases(purchase: Purchase): Observable<any>{
    
  //   return this.http.patch(`http://localhost:3000/purchases/${purchase.id}`, purchase);
  // }


  // getPurchase(id: number): Observable<any> {
  //   return this.http.get("http://localhost:3000/purchases/"+id);

  // }

}