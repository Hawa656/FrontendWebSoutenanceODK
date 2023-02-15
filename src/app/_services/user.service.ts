import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api='http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) { }

  
  //AFFICHAGE DES USER PAR ROLE 
  getListUserByRole(role:string) : Observable<any>{

    let roles = new FormData();
    roles.append("roles",role);

    return this.http.post<any>("http://localhost:8080/api/auth/byRole",roles);
  }

  
}
