import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router : Router) {}

  login(numeroOrEmail: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        numeroOrEmail,
        password,
      },
      
      httpOptions
      
    );
  }

  // +++++++++++++++++CREATION DE COMPTE+++++++++++++++++++++++
  register(nom: string, prenom: string, numero: string, email: string, password: string, confirmPassword: string): Observable<any> {
    // const pseudo = "hawaC";
    // const username = "keita"
    // alert(confirmPassword)
    return this.http.post(
      AUTH_API + 'signup',
      {
        "email":email,
        "password":password,
         "numero":numero,
         "confirmpassword":confirmPassword,
         "nom":nom,
         "prenom":prenom
    },
      httpOptions
    );
  }


   //Deconnexion
   logout(): Observable<any> {
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
    return this.http.request(req);

  }

}