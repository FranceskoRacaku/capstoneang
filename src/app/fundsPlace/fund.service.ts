import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Fund } from './fund/fund.model';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http:HttpClient) { }

 
  createFund(createFund: any) {
    return this.http.post('https://indcapstone.herokuapp.com/funds', createFund, {responseType: 'text'});
  }

  deleteFunds(id: any) {
    return this.http.delete(`https://indcapstone.herokuapp.com/funds/${id}`,{responseType: 'text'});
  }

  getFunds(): Observable<any> {
    return this.http.get("https://indcapstone.herokuapp.com/funds");
  }
  
  updateFunds(fund: Fund): Observable<any>{
    
    return this.http.patch(`https://indcapstone.herokuapp.com/funds/${fund.id}`, fund);
  }


  getFund(id: number): Observable<any> {
    return this.http.get("https://indcapstone.herokuapp.com/funds/"+id);

  }

  // createFund(createFund: any) {
  //   return this.http.post('http://localhost:3000/funds', createFund);
  // }

  // deleteFunds(id: any) {
  //   return this.http.delete(`http://localhost:3000/funds/${id}`, {responseType: 'text'});
  // }

  // getFunds(): Observable<any> {
  //   return this.http.get("http://localhost:3000/funds");

  // }
  // updateFunds(fund: Fund): Observable<any>{
    
  //   return this.http.patch(`http://localhost:3000/funds/${fund.id}`, fund);
  // }


  // getFund(id: number): Observable<any> {
  //   return this.http.get("http://localhost:3000/funds/"+id);

  // }
}