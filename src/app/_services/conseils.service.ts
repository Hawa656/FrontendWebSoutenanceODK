import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConseilsService {

  api= "http://localhost:8080/api/conseil";

  constructor(private http : HttpClient) { }

   //AFFICHAGE DES CONSEILS 
   getConseil():Observable<any>{
    return this.http.get(`${this.api}/lireConseil`);
  }

  //RECUPERATION DE L'ID DU CONSEIL 
  recupererIdConseil(id:number):Observable<any>{
    return this.http.get(`${this.api}/RecupererIdConseil/${id}`);
  }
}
