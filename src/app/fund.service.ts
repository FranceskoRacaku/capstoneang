import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fundsPlace/fund/fund.model';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http:HttpClient) { }

 
  createFund(createFund: any) {
    return this.http.post('https://francs.herokuapp.com/funds', createFund);
  }

  deleteFunds(id: any) {
    return this.http.delete(`https://francs.herokuapp.com/funds/${id}`);
  }

  getFunds(): Observable<any> {
    return this.http.get("https://francs.herokuapp.com/funds");

  }
  updateFunds(fund: Fund): Observable<any>{
    
    return this.http.patch(`https://francs.herokuapp.com/funds/${fund.id}`, fund);
  }


  getFund(id: number): Observable<any> {
    return this.http.get("https://francs.herokuapp.com/funds/"+id);

  }
}