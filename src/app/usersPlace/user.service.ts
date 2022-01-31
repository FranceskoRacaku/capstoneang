import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

 
  createUser(createUser: any) {
    return this.http.post('https://francs.herokuapp.com/users', createUser);
  }

  deletePurchases(id: any) {
    return this.http.delete(`https://francs.herokuapp.com/users/${id}`,{responseType: 'text'});
  }

  getUsers(): Observable<any> {
    return this.http.get("https://francs.herokuapp.com/users");

  }
  updateUsers(user: User): Observable<any>{
    
    return this.http.patch(`https://francs.herokuapp.com/users/${user.id}`, user);
  }


  getUser(id: number): Observable<any> {
    return this.http.get("https://francs.herokuapp.com/users/"+id);

  }

}