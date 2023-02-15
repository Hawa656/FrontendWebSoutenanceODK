import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/reponses/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReponsesService {

  constructor(private http:HttpClient) { }

  // +++++++++++++++++AJOUTER UNE REPONSE+++++++++++++++++++++++
  PostReponse(reponse: string, idquestion:number, id_user:number):Observable<any> {
    let data = new FormData();
    data.append("reponse",reponse);

    console.log('le reponse est ', reponse)
    
    return this.http.post<any>( 
      AUTH_API + 'ajouter/'  + `${idquestion}`, data
      )
  }
}
